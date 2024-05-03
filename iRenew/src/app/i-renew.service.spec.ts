import { TestBed } from '@angular/core/testing';

import { IRenewService } from './i-renew.service';

describe('IRenewService', () => {
  let service: IRenewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IRenewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
