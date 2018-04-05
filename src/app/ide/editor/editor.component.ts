import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  @Output() CompileEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() RunEvent: EventEmitter<string> = new EventEmitter<string>();

  private code: string;

  constructor() { }

  ngOnInit() {
    this.code = 'using System; \
    \nnamespace IDEOnline \
    \n{\
        \n\tclass Klasa\
        \n\t{\
            \n\t\tpublic static void Main(string[] args)\
            \n\t\t{\
            \n\t\t}\
        \n\t}\
    \n}';
  }

  Compile() {
    this.CompileEvent.emit(this.code);
  }

  Run() {
    this.RunEvent.emit('');
  }
}
