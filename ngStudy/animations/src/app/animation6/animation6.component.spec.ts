import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation6Component } from './animation6.component';

describe('Animation6Component', () => {
  let component: Animation6Component;
  let fixture: ComponentFixture<Animation6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animation6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animation6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
