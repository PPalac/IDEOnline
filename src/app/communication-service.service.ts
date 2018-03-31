import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const SERVER = 'http://localhost:5000';
const COMPILEENDPOINT = '/compile';
const RUNENDPOINT = '/run';
const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CommunicationServiceService {

  constructor(private http: HttpClient) { }

  Compile(code: string) {
    return this.http.post(SERVER, ' ', HTTPOPTIONS);
  }

  Run() {
    return this.http.post(SERVER, ' ', HTTPOPTIONS);
  }
}
