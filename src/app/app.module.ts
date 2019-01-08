import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainVoteComponent } from './main-vote/main-vote.component';
import { MainScoreComponent } from './main-score/main-score.component';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CatMashService } from './cat-mash.service';
import { AllScoreComponent } from './all-score/all-score.component';

const routes: Routes = [
  { path: '', redirectTo: 'vote', pathMatch: 'full' },
  { path: 'vote',  component: MainVoteComponent },
  { path: 'scores',  component: MainScoreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainVoteComponent,
    MainScoreComponent,
    AllScoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    HttpClientModule
  ],
  providers: [CatMashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
