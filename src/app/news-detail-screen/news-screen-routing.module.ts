import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { NewsDetailComponent } from './news-detail/news-detail.component';


const routes : Routes = [
 {path:"news-detail/:newsId",component:NewsDetailComponent}
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class NewsScreenRoutingModule { }
