import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import { isDevMode } from '@angular/core';

@Injectable()
export class Service {
  baseUrl: any;

  constructor(private http: HttpClient) {
    this.getUrl();
  }

  getUrl() {
    if (!isDevMode()) {
      this.baseUrl = window.location.protocol + '//' + window.location.host + '/' + 'rest';
      console.log(this.baseUrl)

    } else {
      this.baseUrl = 'http://localhost:8020';
      console.log(this.baseUrl)
    }
  }

  getDefaultHeaders(options) {
    let defaultOptions = null;
    if (options == null) {
      defaultOptions = {
        headers: {
          'Content-Type': 'application/json;',
        }
      };
    } else {
      defaultOptions = options;
    }
    return defaultOptions;
  }

  getData(url, options) {
    this.getUrl();
    options = this.getDefaultHeaders(options);
    this.http.get(url, options).pipe(map((res: any) => {

        return res;

      }), catchError(async (err) => console.log(err))
    );
  }

  public postData<T>(url, body, options): Observable<T> {
    this.getUrl();
    options = this.getDefaultHeaders(options);
    return this.http.post(url, JSON.stringify(body), options).pipe(map((res: any) => {

        return res;

      }), catchError(async (err) => console.log(err))
    );
  }

}
