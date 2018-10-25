import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations5Component } from './animations5.component';

describe('Animations5Component', () => {
  let component: Animations5Component;
  let fixture: ComponentFixture<Animations5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animations5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animations5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
