import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDietPlanComponent } from './my-diet-plan.component';

describe('MyDietPlanComponent', () => {
  let component: MyDietPlanComponent;
  let fixture: ComponentFixture<MyDietPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDietPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
