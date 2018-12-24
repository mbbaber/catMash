import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatMashService } from '../cat-mash.service';

@Component({
  selector: 'app-main-vote',
  templateUrl: './main-vote.component.html',
  styleUrls: ['./main-vote.component.css']
})
export class MainVoteComponent implements OnInit {

  cats: any;

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
}
