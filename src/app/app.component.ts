import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public response: Router,
  ){}

  scoresToggle: boolean;

  receiveScoresToggle($event) {
    this.scoresToggle = $event;
    console.log(this.scoresToggle);
  }

  ValidationSubmit(){
    this.response.navigateByUrl('');
  }
}
