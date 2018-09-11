import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { NewsGridComponent } from './news-grid/news-grid.component';

const routes : Routes = [
  {path:"home",component:NewsGridComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class MainRoutingModule { }
