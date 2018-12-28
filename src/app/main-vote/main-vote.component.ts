import { Component, OnInit, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CatMashService } from '../cat-mash.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main-vote',
  templateUrl: './main-vote.component.html',
  styleUrls: ['./main-vote.component.css']
})
export class MainVoteComponent implements OnInit {

  cats: any[];
  cat1Index: number = 0;
  cat2Index: number = 1;
  totalVotes: number = 0;
  catVotesHash: any = {};
  catKeys = Object.keys; 
  scoresToggle: boolean = false; 

  @Output() scoresToggleEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    public catMash: CatMashService
  ) { }

  btnClick() {
    //this.router.navigateByUrl('/scores');
    console.log('wroks')
    this.scoresToggle = !this.scoresToggle; 
    this.scoresToggleEvent.emit(this.scoresToggle);
  };

  ngOnInit() {
    this.getData()
  
  }

  getData() {
    this.catMash.getData()
      .then((res) => {
        this.cats = res.json().images;
      })

    }
    
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
  }
    
  catIsCuter(catIndex) {
    if (this.cat1Index - 1 === this.cat2Index) {
      this.cat2Index = (this.cat2Index + 2) % this.cats.length
    } else {
      this.cat2Index = (this.cat2Index + 1) % this.cats.length
    }
  }

countTotalVotes() {
  this.totalVotes++;
}

}
