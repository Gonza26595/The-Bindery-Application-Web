import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '../../../../node_modules/@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TheBinderyContent } from '../../content-creator/classes/theBinderyContent';
import { Observable, observable } from '../../../../node_modules/rxjs';
import { database } from '../../../../node_modules/firebase';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: Observable<any[]>;

  constructor(private _db:AngularFireDatabase, private _store:AngularFirestore) {

  }


  public saveNews(data){
    data.id = Math.floor(Math.random() * 1000000000);
    var news = JSON.parse(JSON.stringify(data))
    return this._store.collection('news').doc(news.id+'').set(news);

  }

  public saveEvent(data:TheBinderyContent){

    var batch = this._store.firestore.batch();
    data.id = Math.floor(Math.random() * 1000000000);
    var event = JSON.parse(JSON.stringify(data))
    const ref1 = this._store.collection('events').doc(event.id+'').ref;
    const ref2 = this._store.collection('news').doc(event.id+'').ref;


    batch.set(ref2,event);
    batch.set(ref1,event);


    return batch.commit();
  }

  public saveGalleryImage(data:TheBinderyContent){
    data.id = Math.floor(Math.random() * 1000000000);
    var image = JSON.parse(JSON.stringify(data))
    return this._store.collection('gallery-images').doc(image.id+'').set(image);

  }


  public getNews(){





   return  this._store.collection('news').valueChanges();
  }

  public getEvents(){
    return  this._store.collection('events').valueChanges();
  }

  public getImages(){
    return  this._store.collection('gallery-images').valueChanges();
  }

  public updateNews(newsId,data:TheBinderyContent){
    var news = JSON.parse(JSON.stringify(data))
   return this._store.collection('news').doc(newsId + '').update(news);
  }

  public updateEvent(eventId,data:TheBinderyContent){
    var event = JSON.parse(JSON.stringify(data))
    return this._store.collection('events').doc(eventId+ '').update(event);
  }

  public updateGalleryImage(galleryImageId,data:TheBinderyContent){
    var image = JSON.parse(JSON.stringify(data))
    return this._store.collection('gallery-images').doc(galleryImageId+ '').update(image);
  }

  public getNewsById(newsId){
   return this._store.collection('news').doc(newsId + '').valueChanges();
  }

  public getEventById(eventId){
    return this._store.collection('events').doc(eventId).valueChanges();
  }

  public getImageById(galleryImageId){
    return this._store.collection('gallery-images').doc(galleryImageId).valueChanges();
  }

}
