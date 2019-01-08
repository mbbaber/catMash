import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-all-score',
  templateUrl: './all-score.component.html',
  styleUrls: ['./all-score.component.css']
})
export class AllScoreComponent implements OnChanges {

  @Input() allCats: any;
  @Input() catVotesHash: any;
  @Input() totalVotes: number;
  catKeys = Object.keys; 
  sortedCats: any;

  constructor() { }

  ngOnChanges() {
    this.sortedCats = this.sortObject(this.catVotesHash);
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
