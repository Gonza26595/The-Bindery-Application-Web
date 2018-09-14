import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsScreenRoutingModule } from './news-screen-routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NewsScreenRoutingModule,
    SharedModule
  ],
  declarations: [NewsDetailComponent]
})
export class NewsScreenModule { }
