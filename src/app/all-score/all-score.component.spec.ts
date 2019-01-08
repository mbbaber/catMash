import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllScoreComponent } from './all-score.component';

describe('AllScoreComponent', () => {
  let component: AllScoreComponent;
  let fixture: ComponentFixture<AllScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
