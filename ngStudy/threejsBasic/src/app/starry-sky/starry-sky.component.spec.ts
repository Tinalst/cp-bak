import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarrySkyComponent } from './starry-sky.component';

describe('StarrySkyComponent', () => {
  let component: StarrySkyComponent;
  let fixture: ComponentFixture<StarrySkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarrySkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarrySkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
