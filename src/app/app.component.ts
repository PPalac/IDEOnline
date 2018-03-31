import { Component } from '@angular/core';

import {CommunicationServiceService} from './communication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IDEOnline';
  response: string;

  constructor(private comService: CommunicationServiceService) {}

  Compile() {
    this.response = 'Kompiluje!';
    this.comService.Compile(' ').subscribe(response => console.log(response));
  }

  Run() {
    this.response = 'Uruchamiam!';
    this.comService.Run().subscribe(response => console.log(response));
  }
}
