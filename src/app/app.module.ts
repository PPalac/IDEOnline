import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';


import { IdeModule } from './ide/ide.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './ide/editor/editor.component';
import { CommunicationServiceService } from './communication-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IdeModule,
    HttpClientModule
  ],
  providers: [CommunicationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
