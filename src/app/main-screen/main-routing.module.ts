import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { NewsGridComponent } from './news-grid/news-grid.component';
import { GoalsComponent } from './goals/goals.component';


const routes : Routes = [
  {path:"home",component:NewsGridComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"goals",component:GoalsComponent}
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers:[
  ]
})
export class MainRoutingModule { }
