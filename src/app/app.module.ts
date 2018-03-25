import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { IdeModule } from './ide/ide.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './ide/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IdeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
