import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GalleryImage } from '../../../classes/galleryImage';
import { Validators, FormGroup, FormControl } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-gallery-image-edit',
  templateUrl: './gallery-image-edit.component.html',
  styleUrls: ['./gallery-image-edit.component.css']
})
export class GalleryImageEditComponent implements OnInit {

  galleryImageEditForm: FormGroup;
  @Output() goBack = new EventEmitter<boolean>();
  @Input() galleryImageId;
  successMessage;
  display: boolean = false;
  galleryImage;
  imagePosition;



  constructor(private _contentCreateService:ContentCreatorService, 
              private _firebaseService:FirebaseService,
              private _sharedService:SharedService) {

    this.galleryImageEditForm = new FormGroup({
      title: new FormControl('',Validators.required),
      contentParagraph : new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)
    })

   }

   ngOnInit() {

    //SQL-SERVER
    // this._contentCreateService.getImageById(this.galleryImageId).subscribe(
    //   data=>{this.setGalleryImageValues(data)},
    //   error=>{}
    // );

    //FIREBASE
    this._firebaseService.getImageById(this.galleryImageId).subscribe(
      data=>{this.setGalleryImageValues(data)},
      error=>{}
    );
  }


  public setGalleryImageValues(galleryImage){
    this.galleryImageEditForm.controls['title'].setValue(galleryImage.title);
    this.galleryImageEditForm.controls['contentParagraph'].setValue(galleryImage.contentParagraph);
    this.galleryImageEditForm.controls['author'].setValue(galleryImage.author);
    this.imagePosition = galleryImage.position;
  }

  public createGalleryImageInstance():GalleryImage{
    let galleryImageUpdated = new GalleryImage(
      this.galleryImageEditForm.value.title,
      this.galleryImageEditForm.value.contentParagraph,
      this.galleryImageEditForm.value.author,
      this.imagePosition
    )

    return galleryImageUpdated
  }


  public updateGalleryImage(){
    let galleryImageUpdated = this.createGalleryImageInstance();

    //SQL-SERVER
    // this._contentCreateService.updateGalleryImage(this.galleryImageId,galleryImageUpdated).subscribe(
    //   data=>{
    //    this.successMessage = new String('La imagen ha sido actualizada');
    //    setTimeout(() =>{
    //     this.back();
    //   },2000);
    //   },
    //   error=>{

    //   }
    // )

    //FIREBASE
    this._firebaseService.updateGalleryImage(this.galleryImageId,galleryImageUpdated)
    this.successMessage = "la imagen se actualizo exitosamente"
    setTimeout(()=>{
      this.back();
    },2000)
  }

  public back(){
    this.goBack.emit(false);
  }

  showDialog() {
    this.display = true;
    this.galleryImage = 'gallery-image'
  }

  getPosition(event){
    this.display = event.dialog
    this.imagePosition = event.position
  }

  uploadFile(event){
    const fileSelected: File = event.srcElement.files[0];
    this._sharedService.uploadFile(fileSelected)
    console.log(fileSelected)

  }

}
