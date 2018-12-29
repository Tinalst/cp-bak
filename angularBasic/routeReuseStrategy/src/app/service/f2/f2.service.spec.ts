import { TestBed } from '@angular/core/testing';

import { F2Service } from './f2.service';

describe('F2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F2Service = TestBed.get(F2Service);
    expect(service).toBeTruthy();
  });
});
