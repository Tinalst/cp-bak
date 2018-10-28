import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation8Component } from './animation8.component';

describe('Animation8Component', () => {
  let component: Animation8Component;
  let fixture: ComponentFixture<Animation8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animation8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animation8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
