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
  sortedCats: any;
  firstCat: any;
  secondCat: any; 
  thirdCat: any;
  fourthCat: any; 
  topTwo: any = [];
  twoAndThree: any = [];
  threeAndFour: any = [];
  areOneAndTwoEqual: boolean;
  areTwoAndThreeEqual: boolean;
  areThreeAndFourEqual: boolean;

  constructor() {}

  ngOnChanges() {
    this.sortedCats = this.sortObject(this.catVotesHash);
    if (this.sortedCats.length >= 4) {
      this.firstCat = this.sortedCats[0];
      this.secondCat = this.sortedCats[1];
      this.thirdCat = this.sortedCats[2];
      this.fourthCat = this.sortedCats[3]
    this.topTwo.push(this.firstCat[1], this.secondCat[1])
    this.twoAndThree.push(this.secondCat[1], this.thirdCat[1])
    this.threeAndFour.push(this.thirdCat[1], this.fourthCat[1])
    this.areOneAndTwoEqual = this.areEqual(this.topTwo);
    this.areTwoAndThreeEqual = this.areEqual(this.twoAndThree);
    this.areThreeAndFourEqual = this.areEqual(this.threeAndFour);
console.log(this.areOneAndTwoEqual, this.areTwoAndThreeEqual, this.areThreeAndFourEqual)
    }
    
  }

  areEqual(comparisonArray){
    var len = comparisonArray.length;
    for (var i = 1; i< len; i++){
       if (comparisonArray[i] === null || comparisonArray[i] !== comparisonArray[i-1])
          return false;
    }
    return true;
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

