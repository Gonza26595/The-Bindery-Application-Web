import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base/base.service';
import { HttpClient } from '@angular/common/http';
import { SystemConfiguration } from '../../configuration/system.configuration';
import { TheBinderyContent } from '../classes/theBinderyContent';

@Injectable({
  providedIn: 'root'
})
export class ContentCreatorService extends BaseService {

  constructor(private _http: HttpClient) {
    super(_http);
   }


   public saveNews(data:TheBinderyContent){
    return super.post(
      SystemConfiguration.NEWS,
      data,
      SystemConfiguration.HTTP_OPTIONS
    );
   }

   public saveEvent(data:TheBinderyContent){
    return super.post(
      SystemConfiguration.EVENTS,
      data,
      SystemConfiguration.HTTP_OPTIONS
    );
   }

   public saveGalleryImage(data:TheBinderyContent){
    return super.post(
      SystemConfiguration.GALLERY_IMAGES,
      data,
      SystemConfiguration.HTTP_OPTIONS
    );
   }


   public getEvents(){
    return super.get(SystemConfiguration.EVENTS);
   }

   public getNews(){
    return super.get(SystemConfiguration.NEWS);
   }

   public getImages(){
    return super.get(SystemConfiguration.GALLERY_IMAGES);
   }

   public getEventById(eventId){
    return super.get(SystemConfiguration.EVENTS_ID.replace(':eventId',eventId))
   }

   public getNewsById(newsId){
    return super.get(SystemConfiguration.NEWS_ID.replace(':newsId',newsId));
   }

   public getImageById(galleryImageId){
    return super.get(SystemConfiguration.GALLERY_IMAGES_ID.replace(':galleryImageId',galleryImageId));
   }


   public updateNews(newsId,data:TheBinderyContent){
    return super.put(
      SystemConfiguration.NEWS_ID.replace(':newsId',newsId),
      data,
      SystemConfiguration.HTTP_OPTIONS
    );
   }

   public updateEvent(eventId,data:TheBinderyContent){
    return super.put(
      SystemConfiguration.EVENTS_ID.replace(':eventId',eventId),
      data,
      SystemConfiguration.HTTP_OPTIONS
    );
   }

   public updateGalleryImage(galleryImageId,data:TheBinderyContent){
    return super.put(
      SystemConfiguration.GALLERY_IMAGES_ID.replace(':galleryImageId',galleryImageId),
      data,
      SystemConfiguration.HTTP_OPTIONS
    );
   }
}
