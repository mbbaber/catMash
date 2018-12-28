import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-score',
  templateUrl: './main-score.component.html',
  styleUrls: ['./main-score.component.css']
})
export class MainScoreComponent implements OnInit {

  @Input() myCats: any;
  @Input() catVotesHash: any;
  @Input() totalVotes: number;
  catKeys = Object.keys; 

  constructor() { }

  ngOnInit() {
    console.log(this.catVotesHash, this.totalVotes)
  }

}

