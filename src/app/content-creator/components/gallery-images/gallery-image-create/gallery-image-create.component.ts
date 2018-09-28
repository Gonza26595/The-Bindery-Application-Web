import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { GalleryImage } from '../../../classes/galleryImage';
import { ContentCreatorService } from '../../../services/content-creator.service';

@Component({
  selector: 'app-gallery-image-create',
  templateUrl: './gallery-image-create.component.html',
  styleUrls: ['./gallery-image-create.component.css']
})
export class GalleryImageCreateComponent implements OnInit {


  galleryImageCreateForm: FormGroup;
  @Output() goBack = new EventEmitter<boolean>();
  successMessage;
  disableButtonSave: boolean = false;
  display: boolean = false;
  galleryImage;
  imagePosition;



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
      this.galleryImageCreateForm.value.author,
      this.imagePosition
    )

    return newGalleryImage
  }


  public saveNewGalleryImage(){
    let newGalleryImage = this.createGalleryImageInstance();

    this._contentCreateService.saveGalleryImage(newGalleryImage).subscribe(
      data=>{
       this.successMessage = "La imagen fue creada exitosamente"
       this.disableButtonSave = true;
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

  showDialog() {
    this.display = true;
    this.galleryImage = 'gallery-image'
  }

  getPosition(event){
    this.display = event.dialog
    this.imagePosition = event.position
  }

}
