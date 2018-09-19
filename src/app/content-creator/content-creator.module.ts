import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { ContentCreatorRoutingModule } from './content-creator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContentCreateComponent } from './components/content-create/content-create.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { NewsCreateComponent } from './components/news/news-create/news-create.component';
import { GalleryImageCreateComponent } from './components/gallery-images/gallery-image-create/gallery-image-create.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { GalleryImageListComponent } from './components/gallery-images/gallery-image-list/gallery-image-list.component';
import { GalleryImageEditComponent } from './components/gallery-images/gallery-image-edit/gallery-image-edit.component';
import { NewsEditComponent } from './components/news/news-edit/news-edit.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContentCreatorRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContentCreateComponent,
    EventCreateComponent,
    NewsCreateComponent,
    GalleryImageCreateComponent,
    NewsListComponent,
    EventListComponent,
    GalleryImageListComponent,
    GalleryImageEditComponent,
    NewsEditComponent,
    EventEditComponent
  ]
})
export class ContentCreatorModule { }
