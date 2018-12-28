import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatMashService } from '../cat-mash.service';

@Component({
  selector: 'app-main-vote',
  templateUrl: './main-vote.component.html',
  styleUrls: ['./main-vote.component.css']
})
export class MainVoteComponent implements OnInit {

  cats: any[];
  cat1Index: number = 0;
  cat2Index: number = 1;

  constructor(
    private router: Router,
    public catMash: CatMashService
  ) { }

  btnClick= function () {
    this.router.navigateByUrl('/scores');
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
  }

  cat2IsCuter() {
    if (this.cat1Index === this.cat2Index - 1 ) {
      this.cat1Index = this.cat1Index + 2;
    } else {
      this.cat1Index++
    }
  }
    
  catIsCuter(catIndex) {
    if (this.cat1Index - 1 === this.cat2Index) {
      this.cat2Index = (this.cat2Index + 2) % this.cats.length
    } else {
      this.cat2Index = (this.cat2Index + 1) % this.cats.length
    }
  }

}
