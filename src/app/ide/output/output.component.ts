import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  private _response: string;

  @Input() set response(value: string) {
    this._response = value;
    this.ChangeOutputColor();
  }

  get response(): string {
    return this._response;
  }
  constructor() { }

  ngOnInit() {

  }

  ChangeOutputColor() {
    const input =  document.getElementById('output');

    if (this.response.startsWith('Error', 0)) {
            input.style.color = 'Red';
            return;
    }
    input.style.color = 'White';
  }

}
