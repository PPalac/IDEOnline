import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { OutputComponent } from './output/output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditorComponent, OutputComponent],
  exports: [EditorComponent, OutputComponent]
})
export class IdeModule { }
