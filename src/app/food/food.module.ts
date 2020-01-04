import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { AddFoodComponent } from './add-food/add-food.component';
import { MyDietPlanComponent } from './my-diet-plan/my-diet-plan.component';


@NgModule({
  declarations: [
    AddFoodComponent,
    MyDietPlanComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
