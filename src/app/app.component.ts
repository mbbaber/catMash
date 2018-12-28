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
  scoresToggle: boolean;
  catVotesHash: any;
  totalVotes: number;

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.catMash.getData()
      .then((res) => {
        this.cats = res.json().images;
      })
      console.log(this.cats)
    }

  receiveScoresToggle($event) {
    this.scoresToggle = $event;
    console.log(this.scoresToggle);
  }

  receiveCatsHash($event) {
    this.catVotesHash = $event;
    console.log(this.catVotesHash);
  }

  receiveTotalVotes($event) {
    this.totalVotes = $event;
    console.log(this.totalVotes);
  }

  ValidationSubmit(){
    this.response.navigateByUrl('');
  }
}
