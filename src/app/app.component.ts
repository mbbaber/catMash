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
  lowerPlaceCats: any;

  ngOnInit() {
    this.getData()
  }

  toggleModal() {
    this.scoresToggle = !this.scoresToggle;
  }

  getData() {
    this.catMash.getData()
      .then((res) => {
        this.cats = res.json().images;
      })
    }

  receiveScoresToggle($event) {
    this.scoresToggle = $event;
  }

  receiveCatsHash($event) {
    this.catVotesHash = $event;
  }

  receiveTotalVotes($event) {
    this.totalVotes = $event;
  }

  receiveLowerPlaceCats($event) {
    this.lowerPlaceCats = $event;
  }

  ValidationSubmit(){
    this.response.navigateByUrl('');
  }
}
