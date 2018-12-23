import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-vote',
  templateUrl: './main-vote.component.html',
  styleUrls: ['./main-vote.component.css']
})
export class MainVoteComponent implements OnInit {

  constructor(private router: Router) { }

  btnClick= function () {
          this.router.navigateByUrl('/scores');
  };
  ngOnInit() {
  }

}
