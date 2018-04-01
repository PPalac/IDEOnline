import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const SERVER = 'http://localhost:5646/api/IDE';
const COMPILEENDPOINT = '/Compile';
const RUNENDPOINT = '/Run';
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

  Compile(code: string) {
    return this.http.post(SERVER + COMPILEENDPOINT, JSON.stringify({'value': code}) , HTTPOPTIONS);
  }

  Run() {
    return this.http.get(SERVER + RUNENDPOINT, HTTPOPTIONS);
  }
}
