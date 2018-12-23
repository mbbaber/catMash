import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVoteComponent } from './main-vote.component';

describe('MainVoteComponent', () => {
  let component: MainVoteComponent;
  let fixture: ComponentFixture<MainVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
