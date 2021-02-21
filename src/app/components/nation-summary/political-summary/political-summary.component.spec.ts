import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalSummaryComponent } from './political-summary.component';

describe('PoliticalSummaryComponent', () => {
  let component: PoliticalSummaryComponent;
  let fixture: ComponentFixture<PoliticalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticalSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
