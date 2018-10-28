import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation7Component } from './animation7.component';

describe('Animation7Component', () => {
  let component: Animation7Component;
  let fixture: ComponentFixture<Animation7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animation7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animation7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
