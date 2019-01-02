import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-score',
  templateUrl: './main-score.component.html',
  styleUrls: ['./main-score.component.css']
})
export class MainScoreComponent implements OnChanges {

  @Input() allCats: any;
  @Input() catVotesHash: any;
  @Input() totalVotes: number;
  catKeys = Object.keys; 
  lowerPlaceCats: any;
  firstCat: any;
  secondCat: any; 
  thirdCat: any; 

  constructor() { }

  ngOnChanges() {
    let sortedCats = this.sortObject(this.catVotesHash);

    if (sortedCats.length >= 3) {
      this.lowerPlaceCats = sortedCats.slice(4, sortedCats.length);
      this.firstCat = sortedCats[0];
      this.secondCat = sortedCats[1];
      this.thirdCat = sortedCats[2];
    }
  }

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

