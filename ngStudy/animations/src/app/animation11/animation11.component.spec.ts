import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation11Component } from './animation11.component';

describe('Animation11Component', () => {
  let component: Animation11Component;
  let fixture: ComponentFixture<Animation11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animation11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animation11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
