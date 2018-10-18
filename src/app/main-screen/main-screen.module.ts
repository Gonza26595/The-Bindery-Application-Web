import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsGridComponent } from './news-grid/news-grid.component';
import { SharedModule } from '../shared/shared.module';
import { AgendaGridComponent } from './agenda-grid/agenda-grid.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { MainRoutingModule } from './main-routing.module';
import {DialogModule} from 'primeng/dialog';
import {TextMaskModule} from 'angular2-text-mask';
import { GoalsComponent } from './goals/goals.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    DialogModule,
    TextMaskModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ProgressSpinnerModule

  ],
  exports: [
  ],
  providers:[

  ],
  declarations: [NewsGridComponent, AgendaGridComponent, GalleryGridComponent, GoalsComponent]
})
export class MainScreenModule { }
