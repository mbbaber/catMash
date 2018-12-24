import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class CatMashService {
  private apiUrl = 'https://latelier.co/data/cats.json';

  constructor(public http: Http) {}

  getData() {
    console.log(`getting data from ${this.apiUrl}`)
    return this.http
    .get(this.apiUrl)
    .toPromise()
  }
}
