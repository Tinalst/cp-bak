import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObservabelComponent } from './subject-observabel.component';

describe('SubjectObservabelComponent', () => {
  let component: SubjectObservabelComponent;
  let fixture: ComponentFixture<SubjectObservabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectObservabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectObservabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
