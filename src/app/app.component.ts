import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatMashService } from './cat-mash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public catMash: CatMashService,
    public response: Router
  ){}

  cats: any;
  highScoresToggle: boolean;
  allScoresToggle: boolean;
  catVotesHash: any;
  totalVotes: number;
  sortedCats: any;

  ngOnInit() {
    this.getData()
  }

  toggleHighScoresModal() {
    this.highScoresToggle = !this.highScoresToggle;
  }

  toggleAllScoresModal() {
    this.allScoresToggle = !this.allScoresToggle;
  }

  getData() {
    this.catMash.getData()
    .subscribe((res : any) => {
      this.cats = res.images;
      })
    }

  receiveHighScoresToggle($event) {
    this.highScoresToggle = $event;
  }

  receiveAllScoresToggle($event) {
    this.allScoresToggle = $event;
  }

  receiveCatsHash($event) {
    this.catVotesHash = $event;
  }

  receiveTotalVotes($event) {
    this.totalVotes = $event;
  }

  receiveSortedCats($event) {
    this.sortedCats = $event;
  }

  ValidationSubmit(){
    this.response.navigateByUrl('');
  }
}
