import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObserverComponent } from './subject-observer.component';

describe('SubjectObserverComponent', () => {
  let component: SubjectObserverComponent;
  let fixture: ComponentFixture<SubjectObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
