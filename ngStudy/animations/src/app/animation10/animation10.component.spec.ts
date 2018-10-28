import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation10Component } from './animation10.component';

describe('Animation10Component', () => {
  let component: Animation10Component;
  let fixture: ComponentFixture<Animation10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animation10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animation10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
