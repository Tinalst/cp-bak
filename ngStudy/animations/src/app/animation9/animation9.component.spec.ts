import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation9Component } from './animation9.component';

describe('Animation9Component', () => {
  let component: Animation9Component;
  let fixture: ComponentFixture<Animation9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animation9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animation9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
