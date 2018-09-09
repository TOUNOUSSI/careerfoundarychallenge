import { Injectable } from '@angular/core';
import {AppComponent} from "../app.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AccountService {
  constructor(public https: HttpClient) { }


}
