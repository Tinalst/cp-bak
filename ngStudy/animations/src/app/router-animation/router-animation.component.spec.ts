import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAnimationComponent } from './router-animation.component';

describe('RouterAnimationComponent', () => {
  let component: RouterAnimationComponent;
  let fixture: ComponentFixture<RouterAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
