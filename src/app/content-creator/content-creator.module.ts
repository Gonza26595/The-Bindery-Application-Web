import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { ContentCreatorRoutingModule } from './content-creator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContentCreateComponent } from './components/content-create/content-create.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { NewsCreateComponent } from './components/news-create/news-create.component';
import { GalleryImageCreateComponent } from './components/gallery-image-create/gallery-image-create.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { GalleryImageListComponent } from './components/gallery-image-list/gallery-image-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContentCreatorRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContentCreateComponent,EventCreateComponent,NewsCreateComponent,GalleryImageCreateComponent, NewsListComponent, EventListComponent, GalleryImageListComponent]
})
export class ContentCreatorModule { }
