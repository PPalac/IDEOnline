import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { HubConnection } from '@aspnet/signalr';

const SERVER = 'http://localhost:5646/api/IDE';
const COMPILEENDPOINT = '/Compile';
const RUNENDPOINT = 'http://localhost:5646/Runtime';
const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class CommunicationServiceService {

  constructor(private http: HttpClient) { }

  private hubConnection: HubConnection;

  Compile(code: string) {
    return this.http.post(SERVER + COMPILEENDPOINT, JSON.stringify({'value': code}) , HTTPOPTIONS);
  }

  Run() {
    this.hubConnection = new HubConnection(RUNENDPOINT);
    return this.hubConnection;
  }

}
