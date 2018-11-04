import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAnalysicComponent } from './right-analysic.component';

describe('RightAnalysicComponent', () => {
  let component: RightAnalysicComponent;
  let fixture: ComponentFixture<RightAnalysicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAnalysicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAnalysicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
