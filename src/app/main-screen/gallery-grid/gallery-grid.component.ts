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
    this._firebaseService.getImages().subscribe(
      data=>{
        this.imagesList = data;},
      error =>{}

    )
  }



public flip() {
  var card = document.querySelector('.card');
  card.classList.toggle('is-flipped');
};


public showDialog(position,imageWidth){

  this.display = true;
  let image = this.imagesList.find(i => i.position == position);
  this.imageTitle = image.title;
  this.imageContentParagraph = image.contentParagraph;
  this.imageAuthor = image.author;
  this.imageWidth =  imageWidth;

}


setImageStyles(){
  let styles = {
    'height': '300px',
    'width' : this.imageWidth + 'px'
  };
  return styles;

}








}
