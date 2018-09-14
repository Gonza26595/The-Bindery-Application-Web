import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { GalleryImage } from '../../classes/galleryImage';
import { ContentCreatorService } from '../../services/content-creator.service';

@Component({
  selector: 'app-gallery-image-create',
  templateUrl: './gallery-image-create.component.html',
  styleUrls: ['./gallery-image-create.component.css']
})
export class GalleryImageCreateComponent implements OnInit {


  galleryImageCreateForm: FormGroup;
  @Output() goBack = new EventEmitter<boolean>();
  successMessage;



  constructor(private _contentCreateService:ContentCreatorService) {

    this.galleryImageCreateForm = new FormGroup({
      title: new FormControl('',Validators.required),
      contentParagraph : new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)
    })

   }

  ngOnInit() {
  }

  public createGalleryImageInstance():GalleryImage{
    let newGalleryImage = new GalleryImage(
      this.galleryImageCreateForm.value.title,
      this.galleryImageCreateForm.value.contentParagraph,
      this.galleryImageCreateForm.value.author
    )

    return newGalleryImage
  }


  public saveNewGalleryImage(){
    let newGalleryImage = this.createGalleryImageInstance();

    this._contentCreateService.saveGalleryImage(newGalleryImage).subscribe(
      data=>{
       this.successMessage = "La imagen fue creada exitosamente"
      },
      error=>{

      }
    )
  }

  public back(){
    this.goBack.emit(false);
  }

}
