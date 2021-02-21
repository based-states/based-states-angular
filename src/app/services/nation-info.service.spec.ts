import { TestBed } from '@angular/core/testing';

import { NationInfoService } from './nation-info.service';

describe('NationInfoService', () => {
  let service: NationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
