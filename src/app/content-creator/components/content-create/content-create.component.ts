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
  editEvent: boolean = false;
  editGalleryImage = false;
  editNews: boolean = false;
  contentId: number;



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
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = false;
  }

  public setToEventsList(){
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.newsList = false;
    this.eventsList = true;
    this.galleryImagesList = false;
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = false;
  }


  public setToGalleryImagesList(){
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = true;
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = false;
  }


  public setToNewNews(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = true;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = false;
  }

  public setToNewEvent(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = true;
    this.newGalleryImage = false;
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = false;
  }


  public setToNewGalleryImage(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = true;
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = false;
  }


  public setToEditGalleryImage(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.editEvent = false;
    this.editGalleryImage = true;
    this.editNews = false;
  }

  public setToEditNews(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.editEvent = false;
    this.editGalleryImage = false;
    this.editNews = true;
  }

  public setToEditEvent(){
    this.newsList = false;
    this.eventsList = false;
    this.galleryImagesList = false;
    this.newNews = false;
    this.newEvent = false;
    this.newGalleryImage = false;
    this.editEvent = true;
    this.editGalleryImage = false;
    this.editNews = false;
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

  backFromEvent(event){
    if(event == false){
      this.disableButtonsList(false)
      this.setToEventsList()
    }
  }

  backFromGalleryImage(event){
    if(event == false){
      this.disableButtonsList(false)
      this.setToGalleryImagesList()
    }
  }

  backFromNews(event){
    if(event == false){
      this.disableButtonsList(false)
      this.setToNewsList()
    }
  }

  goToEditImageGallery(event){
    this.contentId = event
    this.disableButtonsList(true)
    this.setToEditGalleryImage();
  }

  goToEditNews(event){
    this.contentId = event
    this.disableButtonsList(true)
    this.setToEditNews();
  }

  goToEditEvent(event){
    this.contentId = event
    this.disableButtonsList(true)
    this.setToEditEvent();
  }

  disableButtonsList(disabled:boolean){
    (<HTMLInputElement> document.getElementById("news-list")).disabled = disabled;
    (<HTMLInputElement> document.getElementById("events-list")).disabled = disabled;
    (<HTMLInputElement> document.getElementById("gallery-images-list")).disabled = disabled;
  }

}
