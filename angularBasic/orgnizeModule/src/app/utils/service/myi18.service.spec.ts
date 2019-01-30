import { TestBed } from '@angular/core/testing';

import { Myi18Service } from './myi18.service';

describe('Myi18Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Myi18Service = TestBed.get(Myi18Service);
    expect(service).toBeTruthy();
  });
});
