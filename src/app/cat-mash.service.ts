import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatMashService {
  private apiUrl = 'http://cors-anywhere.herokuapp.com/latelier.co/data/cats.json';

  constructor(private http: HttpClient) {}

  getData() {
    console.log(`getting data from ${this.apiUrl}`)
    return this.http
               .get(this.apiUrl)
  }
}
