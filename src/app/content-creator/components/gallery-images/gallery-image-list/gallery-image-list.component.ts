import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator.service';

@Component({
  selector: 'app-gallery-image-list',
  templateUrl: './gallery-image-list.component.html',
  styleUrls: ['./gallery-image-list.component.css']
})
export class GalleryImageListComponent implements OnInit {

  galleryImagesList = new Array();
  @Output() editGalleryImage = new EventEmitter();

  constructor(private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getImages().subscribe(
      data=>{
        console.log(data);
       this.galleryImagesList = data;
      },
       error=>{

      }
    )
  }


  public editImageGallery(id){
    this.editGalleryImage.emit(id);
  }

}
