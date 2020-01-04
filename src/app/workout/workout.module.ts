import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout/workout.component';
import { AddExcerciseComponent } from './add-excercise/add-excercise.component';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';



@NgModule({
  declarations: [WorkoutComponent , AddExcerciseComponent, AddWorkoutPlanComponent],
  imports: [
    CommonModule
  ]
})
export class WorkoutModule { }
