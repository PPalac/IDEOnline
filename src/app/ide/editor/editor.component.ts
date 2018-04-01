import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  @Output()
    CompileEvent: EventEmitter<string> = new EventEmitter<string>();
    RunEvent: EventEmitter<string> = new EventEmitter<string>();

  private code: string;

  constructor() { }

  ngOnInit() {
    this.code = 'using System; \nnamespace FormGenerator.Converters \
    \n{\
        \nclass Main\
        \n{\
            \n\tPublic void Main()\
            \n\t{\
            \n\t}\
        \n}\
    \n}';
  }

  Compile() {
    this.CompileEvent.emit(this.code);
  }

  Run() {
    this.RunEvent.emit('');
  }
}
