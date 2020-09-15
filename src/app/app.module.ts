import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {FieldsetModule} from "primeng/fieldset";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {InputTextareaModule} from "primeng/inputtextarea";
import {Service} from "./Service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    InputTextareaModule,
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
