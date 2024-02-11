import { TestBed } from '@angular/core/testing';

import { SerService } from './ser.service';

describe('SerService', () => {
  let service: SerService;

  it('ttttt', () => {
    const calc = new SerService();
    const result = calc.multyply(3, 5);
    expect(result).toBe(15);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
