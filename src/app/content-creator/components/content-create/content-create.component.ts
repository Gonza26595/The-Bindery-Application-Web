import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.css']
})
export class ContentCreateComponent implements OnInit {


  newNews: boolean = false;
  newEvent: boolean = false;
  newGalleryImage: boolean = false;
  newsList: boolean = true;
  eventsList: boolean = false;
  galleryImagesList: boolean = false;


  constructor() { }

  ngOnInit() {
  }


  public setToNewsList(){
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.newsList = true;
    this.eventsList = false;
    this.galleryImagesList = false;
  }

  public setToEventsList(){
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.newsList = false;
    this.eventsList = true;
    this.galleryImagesList = false;
  }


  public setToGalleryImagesList(){
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = true;
  }


  public setToNewNews(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = true;
    this.newEvent = false;
    this.newGalleryImage = false;
  }

  public setToNewEvent(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = true;
    this.newGalleryImage = false;
  }


  public setToNewGalleryImage(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = true;
  }

  public setRoute(){
    if(this.newsList){
      this.setToNewNews();
    } else if(this.eventsList){
      this.setToNewEvent();
    } else if(this.galleryImagesList){
      this.setToNewGalleryImage()
    }

    this.disableButtonsList(true);

  }

  backFromNewEvent(event){
    if(event == false){
      this.disableButtonsList(false)
      this.setToEventsList()
    }
  }

  backFromNewGalleryImage(event){
    if(event == false){
      this.disableButtonsList(false)
      this.setToGalleryImagesList()
    }
  }

  backFromNewNews(event){
    if(event == false){
      this.disableButtonsList(false)
      this.setToNewsList()
    }
  }

  disableButtonsList(disabled:boolean){
    (<HTMLInputElement> document.getElementById("news-list")).disabled = disabled;
    (<HTMLInputElement> document.getElementById("events-list")).disabled = disabled;
    (<HTMLInputElement> document.getElementById("gallery-images-list")).disabled = disabled;
  }

}
