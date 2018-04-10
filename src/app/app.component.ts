import { Component } from '@angular/core';

import {CommunicationServiceService} from './communication-service.service';
import { HubConnection } from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IDEOnline';
  response: any;
  hubConnection: HubConnection;

  constructor(private comService: CommunicationServiceService) {}

  Compile(code: string) {
    // tslint:disable-next-line:max-line-length
    this.comService.Compile(code).subscribe(response => {console.log(response); this.response = response['compileResult']; document.cookie = response['id']; });
  }

  Run(param: string) {

    this.response = '';

    this.hubConnection = this.comService.Run();

    this.
      // tslint:disable-next-line:max-line-length
      hubConnection.start().then(() => {console.log('Connection sucessful!'); this.hubConnection.invoke('Run', document.cookie ); }).catch(error => console.log(error));

    this.hubConnection.on('Output', (msg: string) => {
      const text = `${msg}`;
      this.response += text;
    });

    this.hubConnection.on('RequestInput', () => {
      alert('');
    });
  }

  KillProcess() {
    this.hubConnection.invoke('Kill', document.cookie);
  }
}
