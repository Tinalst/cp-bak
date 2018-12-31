import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F2Component } from './f2.component';

describe('F2Component', () => {
  let component: F2Component;
  let fixture: ComponentFixture<F2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
