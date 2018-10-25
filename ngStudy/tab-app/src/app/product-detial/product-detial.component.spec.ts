import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetialComponent } from './product-detial.component';

describe('ProductDetialComponent', () => {
  let component: ProductDetialComponent;
  let fixture: ComponentFixture<ProductDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
