import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-score',
  templateUrl: './main-score.component.html',
  styleUrls: ['./main-score.component.css']
})
export class MainScoreComponent implements OnInit {

  constructor(private router: Router) { }

  btnClick= function () {
          this.router.navigateByUrl('/vote');
  };

  ngOnInit() {
  }

}

