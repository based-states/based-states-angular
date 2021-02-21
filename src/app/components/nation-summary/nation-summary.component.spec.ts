import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationSummaryComponent } from './nation-summary.component';

describe('NationSummaryComponent', () => {
  let component: NationSummaryComponent;
  let fixture: ComponentFixture<NationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
