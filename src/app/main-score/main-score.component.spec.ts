import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScoreComponent } from './main-score.component';

describe('MainScoreComponent', () => {
  let component: MainScoreComponent;
  let fixture: ComponentFixture<MainScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
