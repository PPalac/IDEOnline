import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorComponent, OutputComponent],
  exports: [EditorComponent, OutputComponent]
})
export class IdeModule { }
