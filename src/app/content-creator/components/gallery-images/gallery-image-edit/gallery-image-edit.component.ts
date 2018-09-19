import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GalleryImage } from '../../../classes/galleryImage';
import { Validators, FormGroup, FormControl } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';

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



  constructor(private _contentCreateService:ContentCreatorService) {

    this.galleryImageEditForm = new FormGroup({
      title: new FormControl('',Validators.required),
      contentParagraph : new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)
    })

   }

   ngOnInit() {
    this._contentCreateService.getImageById(this.galleryImageId).subscribe(
      data=>{this.setGalleryImageValues(data)},
      error=>{}
    );
  }


  public setGalleryImageValues(galleryImage:GalleryImage){
    this.galleryImageEditForm.controls['title'].setValue(galleryImage.title);
    this.galleryImageEditForm.controls['contentParagraph'].setValue(galleryImage.contentParagraph);
    this.galleryImageEditForm.controls['author'].setValue(galleryImage.author);
  }

  public createGalleryImageInstance():GalleryImage{
    let galleryImageUpdated = new GalleryImage(
      this.galleryImageEditForm.value.title,
      this.galleryImageEditForm.value.contentParagraph,
      this.galleryImageEditForm.value.author
    )

    return galleryImageUpdated
  }


  public updateGalleryImage(){
    let galleryImageUpdated = this.createGalleryImageInstance();

    this._contentCreateService.updateGalleryImage(this.galleryImageId,galleryImageUpdated).subscribe(
      data=>{
       this.successMessage = new String('La imagen ha sido actualizada');
       setTimeout(() =>{
        this.back();
      },2000);
      },
      error=>{

      }
    )
  }

  public back(){
    this.goBack.emit(false);
  }

}
