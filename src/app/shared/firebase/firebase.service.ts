import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '../../../../node_modules/@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TheBinderyContent } from '../../content-creator/classes/theBinderyContent';
import { Observable, observable } from '../../../../node_modules/rxjs';
import { FirebaseFirestore, FirebaseDatabase } from '../../../../node_modules/@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';





@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: Observable<any[]>;

  constructor(private _db:AngularFireDatabase, 
              private _store:AngularFirestore,
              private _storage:AngularFireStorage) {
  }


  public saveNews(data,imageFile){
    data.id = Math.floor(Math.random() * 1000000000);
    const dataRef = this._db.object('news/' + data.id);
    const imageRef = this._storage.ref('news/' + data.id);
    imageRef.put(imageFile);
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
    imageRef.put(imageFile);
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
    imageRef.put(imageFile);
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

  public updateNews(newsId,data:TheBinderyContent){
    const itemRef = this._db.object('news/' + newsId);
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

  public updateEvent(eventId,data:TheBinderyContent){
    const itemRef = this._db.object('events/' + eventId);
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

  public updateGalleryImage(galleryImageId,data:TheBinderyContent){
    const itemRef = this._db.object('gallery-images/' + galleryImageId);
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
