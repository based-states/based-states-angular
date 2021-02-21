import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationBrowserComponent } from './nation-browser.component';

describe('NationBrowserComponent', () => {
  let component: NationBrowserComponent;
  let fixture: ComponentFixture<NationBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
