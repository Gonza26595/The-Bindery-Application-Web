import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base/base.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
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
}
