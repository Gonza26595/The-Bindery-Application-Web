import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';

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

  constructor(private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getImages().subscribe(
      data=>{
        this.imagesList = data;
        console.log(this.imagesList);

      },
      error =>{

      }
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
  this.imageWidth = imageWidth

 setTimeout(function(){
   console.log(document.querySelector('#dialog-image').nodeValue)
 },2000)


}








}
