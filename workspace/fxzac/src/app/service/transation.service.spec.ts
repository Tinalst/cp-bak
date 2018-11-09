import { TestBed } from '@angular/core/testing';

import { TransationService } from './transation.service';

describe('TransationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransationService = TestBed.get(TransationService);
    expect(service).toBeTruthy();
  });
});
