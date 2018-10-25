import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullProductComponent } from './null-product.component';

describe('NullProductComponent', () => {
  let component: NullProductComponent;
  let fixture: ComponentFixture<NullProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
