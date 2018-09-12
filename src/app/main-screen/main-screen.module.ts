import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsGridComponent } from './news-grid/news-grid.component';
import { SharedModule } from '../shared/shared.module';
import { AgendaGridComponent } from './agenda-grid/agenda-grid.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { MainRoutingModule } from './main-routing.module';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    DialogModule
  ],
  exports: [
  ],
  declarations: [NewsGridComponent, AgendaGridComponent, GalleryGridComponent]
})
export class MainScreenModule { }
