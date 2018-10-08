import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { FirebaseService } from '../../shared/firebase/firebase.service';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent implements OnInit {

  display = false;
  imagesList = new Array();
  galleryImagesList = new Array();
  image;
  imageTitle;
  imageContentParagraph;
  imageAuthor;
  imageWidth;

  constructor(private _contentCreatorService:ContentCreatorService, private _firebaseService:FirebaseService) { }

  ngOnInit() {

    //SQL-SERVER
    // this._contentCreatorService.getImages().subscribe(
    //   data=>{
    //     this.imagesList = data;
    //     console.log(this.imagesList);

    //   },
    //   error =>{

    //   }
    // )

    //FIREBASE

    this.galleryImagesList = this._firebaseService.getGalleryImages();

    this._firebaseService.getImages().subscribe(
      data=>{
        this.imagesList = data;
        this.setGalleryImages(this.imagesList)
      },
      error =>{}

    )
  }



public flip() {
  var card = document.querySelector('.card');
  card.classList.toggle('is-flipped');
};


public showDialog(position,imageWidth){


  let image = this.imagesList.find(i => i.position == position);
  let galleryImage = this.galleryImagesList.find(i => i.position == position);
  this.imageTitle = image.title;
  this.imageContentParagraph = image.contentParagraph;
  this.imageAuthor = image.author;
  this.imageWidth =  imageWidth;
  this.image = galleryImage.image;


    this.display = true;


}

public setGalleryImages(imagesList){

  for(let image of imagesList){
    if(image.position == 1){
      this.setGalleryImagesById(image.id,1)
    } else if (image.position == 2){
      this.setGalleryImagesById(image.id,2)
    } else if (image.position == 3){
      this.setGalleryImagesById(image.id,3)
    } else if (image.position == 4){
      this.setGalleryImagesById(image.id,4)
  } else if (image.position == 5){
    this.setGalleryImagesById(image.id,5)
  }
}
}






public setGalleryImagesById(galleryImageId,imagePosition){
  this._firebaseService.getGalleryImageById(galleryImageId).subscribe(
    data=>{
     let galleryImage =  document.getElementById('gallery-image-' + imagePosition) as HTMLImageElement;
     let mobileGalleryImage = document.getElementById('mobile-gallery-image-' + imagePosition) as HTMLImageElement;
     galleryImage.src = data;
     mobileGalleryImage.src = data;
    }
  )
}


setImageStyles(){
  let styles = {
    'height': '300px',
    'width' : this.imageWidth + 'px'
  };
  return styles;

}








}
