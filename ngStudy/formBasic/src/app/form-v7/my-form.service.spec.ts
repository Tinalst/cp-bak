import { TestBed } from '@angular/core/testing';

import { MyFormService } from './my-form.service';

describe('MyFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFormService = TestBed.get(MyFormService);
    expect(service).toBeTruthy();
  });
});
