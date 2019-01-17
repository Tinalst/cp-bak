import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSnapComponent } from './create-snap.component';

describe('CreateSnapComponent', () => {
  let component: CreateSnapComponent;
  let fixture: ComponentFixture<CreateSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
