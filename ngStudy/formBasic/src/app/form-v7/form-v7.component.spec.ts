import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV7Component } from './form-v7.component';

describe('FormV7Component', () => {
  let component: FormV7Component;
  let fixture: ComponentFixture<FormV7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormV7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormV7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
