import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainVoteComponent } from './main-vote/main-vote.component';
import { MainScoreComponent } from './main-score/main-score.component';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', redirectTo: 'vote', pathMatch: 'full' },
  { path: 'vote',  component: MainVoteComponent },
  { path: 'scores',  component: MainScoreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainVoteComponent,
    MainScoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
