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

  @Input() cats: any;
  @Output() scoresToggleEvent = new EventEmitter<boolean>();
  @Output() catsHashEvent = new EventEmitter<any>();
  @Output() totalVotesEvent = new EventEmitter<any>(); 

  constructor() { }

  btnClick() {
    this.scoresToggle = !this.scoresToggle; 
    this.scoresToggleEvent.emit(this.scoresToggle);
    this.totalVotesEvent.emit(this.totalVotes);
  };
    
  cat1IsCuter() {
    if (this.cat1Index - 1 === this.cat2Index) {
      this.cat2Index = (this.cat2Index + 2) % this.cats.length
    } else {
      this.cat2Index = (this.cat2Index + 1) % this.cats.length
    }
    this.countTotalVotes();

    if (this.catVotesHash.hasOwnProperty(this.cat1Index)) {
      this.catVotesHash[this.cat1Index] = this.catVotesHash[this.cat1Index] +1; 
    } else {
      this.catVotesHash[this.cat1Index] = 1; 
    }
    this.catsHashEvent.emit(this.catVotesHash);
  }

  cat2IsCuter() {
    if (this.cat1Index === this.cat2Index - 1 ) {
      this.cat1Index = (this.cat1Index + 2) % this.cats.length
    } else {
      this.cat1Index = (this.cat1Index + 1) % this.cats.length
    }
    this.countTotalVotes()

    if (this.catVotesHash.hasOwnProperty(this.cat2Index)) {
      this.catVotesHash[this.cat2Index] = this.catVotesHash[this.cat2Index] +1; 
    } else {
      this.catVotesHash[this.cat2Index] = 1; 
    }
    this.catsHashEvent.emit(this.catVotesHash);
  }

countTotalVotes() {
  this.totalVotes++;
  this.totalVotesEvent.emit(this.totalVotes);
}

}
