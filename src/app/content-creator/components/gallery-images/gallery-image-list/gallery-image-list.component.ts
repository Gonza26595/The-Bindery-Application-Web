import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';

@Component({
  selector: 'app-gallery-image-list',
  templateUrl: './gallery-image-list.component.html',
  styleUrls: ['./gallery-image-list.component.css']
})
export class GalleryImageListComponent implements OnInit {

  galleryImagesList = new Array();
  @Output() editGalleryImage = new EventEmitter();

  constructor(private _contentCreatorService:ContentCreatorService, private _firebaseService:FirebaseService) { }

  ngOnInit() {

    //SQL-SERVER
    // this._contentCreatorService.getImages().subscribe(
    //   data=>{
    //    this.galleryImagesList = data;
    //   },
    //    error=>{

    //   }
    // )

    //FIREBASE
    this._firebaseService.getImages().subscribe(
      data=>{
        this.galleryImagesList = data;
      }
    )
  }


  public editImageGallery(id){
    this.editGalleryImage.emit(id);
  }

}
