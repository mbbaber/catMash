import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortObject(object) {
    var sortedArray = [];
    for (var key in object) {
      sortedArray.push([parseInt(key), object[key]]);
    }
    sortedArray.sort(function(a, b) {
      return b[1] - a[1];
    });
    return sortedArray;
  }
}
