import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SortService } from '../sort.service';

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

  constructor(
    sortService: SortService
  ) { 
    this.sortedCats = sortService.sortObject(this.catVotesHash);
  }

  ngOnChanges() {
    //this.sortedCats = this.sortService.sortObject(this.catVotesHash);
    if (this.sortedCats.length >= 3) {
      this.firstCat = this.sortedCats[0];
      this.secondCat = this.sortedCats[1];
      this.thirdCat = this.sortedCats[2];
    }
  }
}

