import { TestBed } from '@angular/core/testing';

import { DataearnService } from './dataearn.service';

describe('DataearnService', () => {
  let service: DataearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
