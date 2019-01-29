import { TestBed } from '@angular/core/testing';

import { M1Service } from './m1.service';

describe('M1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: M1Service = TestBed.get(M1Service);
    expect(service).toBeTruthy();
  });
});
