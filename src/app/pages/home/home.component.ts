import {Component, OnInit} from '@angular/core';
import {QueueConfiguration} from "./QueueConfiguration";
import {Service} from "../../Service";

class Broker {
  name: any;
  code: any;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  queue: QueueConfiguration = new  QueueConfiguration();
  brokers: Broker[];
  selectedBroker: Broker;
  msg: any;
  correlationIdSend: any;
  correlationIdReceive: any;

  constructor(private service: Service) {
    this.brokers = [
      {name: 'Active MQ', code: 'active_mq'},
      {name: 'IBM MQ', code: 'ibm_mq'},
      {name: 'Red Hat AMQ', code: 'redhat_amq'}
    ];
  }

  ngOnInit(): void {
  }

  onBrokerSelected(e) {
    this.queue.brokerName = e.value.code;
  }

  checkBrokerConnection() {
    this.service.postData<any>(this.service.baseUrl + '/jms/send/h', this.queue, null).subscribe((res) => {
      console.log(res);
    });
  }
}


