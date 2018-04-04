import { Component } from '@angular/core';

import {CommunicationServiceService} from './communication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IDEOnline';
  response: any;

  constructor(private comService: CommunicationServiceService) {}

  Compile(code: string) {
    this.comService.Compile(code).subscribe(response => {console.log(response); this.response = response; });
  }

  Run(param: string) {
    this.comService.Run().subscribe(response => {console.log(response); this.response = response; });
  }
}
