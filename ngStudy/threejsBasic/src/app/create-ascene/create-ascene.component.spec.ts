import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateASceneComponent } from './create-ascene.component';

describe('CreateASceneComponent', () => {
  let component: CreateASceneComponent;
  let fixture: ComponentFixture<CreateASceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateASceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateASceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
