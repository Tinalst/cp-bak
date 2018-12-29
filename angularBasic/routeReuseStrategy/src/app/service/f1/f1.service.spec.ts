import { TestBed } from '@angular/core/testing';

import { F1Service } from './f1.service';

describe('F1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F1Service = TestBed.get(F1Service);
    expect(service).toBeTruthy();
  });
});
