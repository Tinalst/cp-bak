import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTweenScrollComponent } from './simple-tween-scroll.component';

describe('SimpleTweenScrollComponent', () => {
  let component: SimpleTweenScrollComponent;
  let fixture: ComponentFixture<SimpleTweenScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTweenScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTweenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
