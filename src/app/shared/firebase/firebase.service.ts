import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '../../../../node_modules/@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { TheBinderyContent } from '../../content-creator/classes/theBinderyContent';
import { Observable} from '../../../../node_modules/rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private _startupData: any;
  items: Observable<any[]>;

  constructor(private _db:AngularFireDatabase,
              private _store:AngularFirestore,
              private _storage:AngularFireStorage,
            private _http:HttpClient) {
  }





  public saveNews(data,imageFile,authorImageFile){
    data.id = Math.floor(Math.random() * 1000000000);
    const dataRef = this._db.object('news/' + data.id);
    const imageRef = this._storage.ref('news/' + data.id);
    const authorImageRef = this._storage.ref('news-author/' + data.id);
    authorImageRef.put(authorImageFile, {cacheControl: 'public, max-age=7200'})
    imageRef.put(imageFile, { cacheControl: 'public, max-age=7200' })
    this._db.list('/news').query.once("value").then(
      result=>{
        if(result.val() != null || result.val() != undefined){
       var keys = Object.keys(result.val())
        for(let key of keys){
          this._db.object('/news/' + key).query.once("value").then(
            result=>{
              if(result.val().position == data.position && result.val().id != data.id){
                this._db.object('news/'+ result.val().id).update({'position':'0'});
              }
            })
        }}
      })
         dataRef.set(data);




  }

  public saveEvent(data:TheBinderyContent,imageFile){
    data.id = Math.floor(Math.random() * 1000000000);
    const dataRef = this._db.object('events/' + data.id);
    const imageRef = this._storage.ref('events/' + data.id);
    imageRef.put(imageFile, { cacheControl: 'public, max-age=7200' })
    this._db.list('/events').query.once("value").then(
      result=>{
        if(result.val() != null || result.val() != undefined){
       var keys = Object.keys(result.val())
        for(let key of keys){
          this._db.object('/events/' + key).query.once("value").then(
            result=>{
              if(result.val().position == data.position && result.val().id != data.id){
                this._db.object('events/'+ result.val().id).update({'position':'0'});
              }
            })
        }}
      })
         dataRef.set(data);


  }

  public saveGalleryImage(data:TheBinderyContent,imageFile){
    data.id = Math.floor(Math.random() * 1000000000);
    const dataRef = this._db.object('gallery-images/' + data.id);
    const imageRef = this._storage.ref('gallery-images/' + data.id);
    imageRef.put(imageFile, { cacheControl: 'public, max-age=7200' })
    this._db.list('/gallery-images').query.once("value").then(
      result=>{
        if(result.val() != null || result.val() != undefined){
       var keys = Object.keys(result.val())
        for(let key of keys){
          this._db.object('/gallery-images/' + key).query.once("value").then(
            result=>{
              if(result.val().position == data.position && result.val().id != data.id){
                this._db.object('gallery-images/'+ result.val().id).update({'position':'0'});
              }
            })
        }}
      })
         dataRef.set(data);

  }


  public getNews(){

    this.items = this._db.list('news').valueChanges()

    return  this.items ;
  }

  public getEvents(){

    this.items = this._db.list('events').valueChanges()

    return  this.items ;}

  public getImages(){
    this.items = this._db.list('gallery-images').valueChanges()

    return  this.items ;
  }

  public getNewsImages(){

    let newsImagesList = new Array();
    this._db.list('news').valueChanges().subscribe(
      data=>{
        let newsData =new Array();
        newsData = data;
       for(let newsImage of newsData){
         this._storage.ref('news/'+ newsImage.id).getDownloadURL().subscribe(
           data=>{
            newsImagesList.push({'newsId': newsImage.id ,'image':data,'position':newsImage.position});
           }, error=>{
           }
         )
       }
      }
    )

    return newsImagesList;
  }

  public getEventImages(){
    let eventsImagesList = new Array();
    this._db.list('events').valueChanges().subscribe(
      data=>{
        let eventsData =new Array();
        eventsData = data;
       for(let eventImage of eventsData){
         this._storage.ref('events/'+ eventImage.id).getDownloadURL().subscribe(
           data=>{
             eventsImagesList.push({'eventId': eventImage.id ,'image':data, 'position':eventImage.position});
           }
         )
       }
      }
    )

    return eventsImagesList;
  }

  public getGalleryImages(){
    let galleryImagesList = new Array();
    this._db.list('gallery-images').valueChanges().subscribe(
      data=>{
        let galleryData =new Array();
        galleryData = data;
       for(let galleryImage of galleryData){
         this._storage.ref('gallery-images/'+ galleryImage.id).getDownloadURL().subscribe(
           data=>{
             galleryImagesList.push({'galleryImageId': galleryImage.id ,'image':data,'position':galleryImage.position});
           }
         )
       }
      }
    )

    return galleryImagesList;
  }

  public updateNews(newsId,data:TheBinderyContent,imageFile,authorImageFile){
    const itemRef = this._db.object('news/' + newsId);
    const imageRef = this._storage.ref('news/' + newsId);
    const authorImageRef = this._storage.ref('news-author/' + newsId);
    authorImageRef.put(authorImageFile, {cacheControl: 'public, max-age=7200'})
    imageRef.put(imageFile, { cacheControl: 'public, max-age=7200' })
    this._db.list('/news').query.once("value").then(
      result=>{
       var keys = Object.keys(result.val())
        for(let key of keys){
          this._db.object('/news/' + key).query.once("value").then(
            result=>{
              if(result.val().position == data.position && result.val().id != newsId){
                this._db.object('news/'+ result.val().id).update({'position':'0'});
              }
            })
        }
      })
         itemRef.update(data);
  }

  public updateEvent(eventId,data:TheBinderyContent,imageFile){
    const itemRef = this._db.object('events/' + eventId);
    const imageRef = this._storage.ref('events/' + eventId);
    imageRef.put(imageFile, { cacheControl: 'public, max-age=7200' })
    this._db.list('/events').query.once("value").then(
      result=>{
       var keys = Object.keys(result.val())
        for(let key of keys){
          this._db.object('/events/' + key).query.once("value").then(
            result=>{
              if(result.val().position == data.position && result.val().id != eventId){
                this._db.object('events/'+ result.val().id).update({'position':'0'});
              }
            })
        }
      })
         itemRef.update(data);
  }

  public updateGalleryImage(galleryImageId,data:TheBinderyContent,imageFile){
    const itemRef = this._db.object('gallery-images/' + galleryImageId);
    const imageRef = this._storage.ref('gallery-images/' + galleryImageId);
    imageRef.put(imageFile, { cacheControl: 'public, max-age=7200' })
    this._db.list('/gallery-images').query.once("value").then(
      result=>{
       var keys = Object.keys(result.val())
        for(let key of keys){
          this._db.object('/gallery-images/' + key).query.once("value").then(
            result=>{
              if(result.val().position == data.position && result.val().id != galleryImageId){
                this._db.object('gallery-images/'+ result.val().id).update({'position':'0'});
              }
            })
        }
      })
         itemRef.update(data);
  }


  public getNewsImageById(newsId){
    return this._storage.ref('news/' + newsId).getDownloadURL();
  }

  public getAuthorNewsImageById(newsId){
    return this._storage.ref('news-author/' + newsId).getDownloadURL();
  }

  public getEventImageById(eventId){
    return this._storage.ref('events/' + eventId).getDownloadURL();
  }

  public getGalleryImageById(galleryImageId){
    return this._storage.ref('gallery-images/' + galleryImageId).getDownloadURL();
  }

  public getNewsById(newsId){
    return  this._db.object('news/'+ newsId).valueChanges() ;
  }

  public getEventById(eventId){
    return  this._db.object('events/'+ eventId).valueChanges() ;
  }

  public getImageById(galleryImageId){
    return  this._db.object('gallery-images/'+ galleryImageId).valueChanges() ;
  }



}
