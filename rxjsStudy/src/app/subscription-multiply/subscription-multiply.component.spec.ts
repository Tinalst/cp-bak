import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionMultiplyComponent } from './subscription-multiply.component';

describe('SubscriptionMultiplyComponent', () => {
  let component: SubscriptionMultiplyComponent;
  let fixture: ComponentFixture<SubscriptionMultiplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionMultiplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionMultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
