import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let calc: CalcService;
  let shared: SharedService;

  beforeEach(() => {
    shared = jasmine.createSpyObj('SharedService', ['mySharedFn']);
    TestBed.configureTestingModule({
      providers: [CalcService, { provide: SharedService, useValue: shared }],
    });
    calc = TestBed.inject(CalcService);
    shared = TestBed.inject(SharedService);
  });

  it('should multiply', () => {
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it('should add', () => {
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  it('should be created', () => {
    expect(calc).toBeTruthy();
  });

  it('should call mySharedFn', () => {
    const result = calc.multiply(3, 5);
    expect(shared.mySharedFn).toHaveBeenCalled();
  });
});
