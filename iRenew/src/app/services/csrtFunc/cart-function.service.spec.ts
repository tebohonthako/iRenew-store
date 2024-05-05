import { TestBed } from '@angular/core/testing';

import { CartFunctionService } from './cart-function.service';

describe('CartFunctionService', () => {
  let service: CartFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
