import { Component, OnInit } from '@angular/core';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent implements OnInit {

  display: boolean = false;
  imagesList = new Array();

  constructor(private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getImages().subscribe(
      data=>{
        this.imagesList = data;
      },
      error =>{

      }
    )
  }

  



public flip() {
  var card = document.querySelector('.card');
  card.classList.toggle('is-flipped');
};


public showDialog(position){
  this.display = true;
  let event = this.imagesList.find(i => i.position == position);
  document.querySelector('#dialogTitle').textContent = event.title;
  document.querySelector('#dialogContentParagraph').textContent = event.contentParagraph; 
}

}
