import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-vote',
  templateUrl: './main-vote.component.html',
  styleUrls: ['./main-vote.component.css']
})
export class MainVoteComponent {

  cat1Index: number = 0;
  cat2Index: number = 1;

  totalVotes: number = 0;
  catVotesHash: any = {};
  scoresToggle: boolean = false; 
  numberOfDifferentCats: number = 0;

  @Input() cats: any;
  @Input() lowerPlaceCats: any;
  @Output() scoresToggleEvent = new EventEmitter<boolean>();
  @Output() catsHashEvent = new EventEmitter<any>();
  @Output() totalVotesEvent = new EventEmitter<any>(); 

  constructor() { }

  btnClick() {
    this.scoresToggle = !this.scoresToggle; 
    this.scoresToggleEvent.emit(this.scoresToggle);
    this.totalVotesEvent.emit(this.totalVotes);
  };

  getDifferentRandomCatIndex() {
    var newIndex = Math.round(Math.random() * this.cats.length);
    if (newIndex == this.cat1Index || newIndex == this.cat2Index) {
      newIndex = this.getDifferentRandomCatIndex() 
    }
    return newIndex
  }

  voteForCat(idx: number) {
    if (this.cat1Index == idx) {
      this.cat2Index = this.getDifferentRandomCatIndex();
    } else {
      this.cat1Index = this.getDifferentRandomCatIndex();
    }

    this.countTotalVotes();

    if (this.catVotesHash.hasOwnProperty(idx)) {
      this.catVotesHash[idx] = this.catVotesHash[idx] + 1; 
    } else {
      this.catVotesHash[idx] = 1; 
    }

    this.numberOfDifferentCats = Object.keys(this.catVotesHash).length

    this.catsHashEvent.emit(this.catVotesHash);
  }

  countTotalVotes() {
    this.totalVotes++;
    this.totalVotesEvent.emit(this.totalVotes);
  }

}
