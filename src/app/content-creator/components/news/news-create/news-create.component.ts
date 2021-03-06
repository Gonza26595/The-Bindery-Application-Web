import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { News } from '../../../classes/news';
import * as moment from 'moment';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {


  maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  newsCreateForm: FormGroup
  @Output() goBack = new EventEmitter<boolean>();
  successMessage;
  display: boolean = false;
  disableButtonSave: boolean = false;
  newsPosition:number = 0;
  news;
  imageFile: File;
  authorImageFile: File;



  constructor(private _contentCreateService:ContentCreatorService,
              private _firebaseService:FirebaseService,
              private _sharedService:SharedService) {

    this.newsCreateForm = new FormGroup({
      section: new FormControl('',Validators.required),
      newsDate: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
      contentParagraph: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      authorDescription : new FormControl('',Validators.required)

    })

   }

  ngOnInit() {
  }


  public createNewsInstance():News{


    let array = this.newsCreateForm.value.newsDate.split('/');
    let newsDate = new Date(array[2],array[1]-1,array[0]).toISOString().substring(0,10);

    let newNews = new News(
      this.newsCreateForm.value.title,
      this.newsCreateForm.value.contentParagraph,
      newsDate,
      this.newsCreateForm.value.author,
      this.newsCreateForm.value.section,
      this.newsCreateForm.value.authorDescription,
      this.newsPosition
    )



    return newNews
  }


  public saveNewNews(){
    let newNews = this.createNewsInstance();

    //SQL-SERVER
    // this._contentCreateService.saveNews(newNews).subscribe(
    //   data=>{
    //     this.successMessage = "La noticia fue creada exitosamente"
    //     this.disableButtonSave = true;
    //     setTimeout(() =>{
    //       this.back();
    //     },2000);
    //   },
    //   error=>{

    //   }
    // )

    //FIREBASE
     this._firebaseService.saveNews(newNews,this.imageFile, this.authorImageFile)
     this.successMessage = "la noticia se creo exitosamente"
    setTimeout(()=>{
      this.back();
    },5000)


  }

  public back(){
    this.goBack.emit(false);
  }


  getPosition(event){
    this.display = event.dialog
    this.newsPosition = event.position
  }

  showDialog() {
    this.display = true;
    this.news = 'news'
  }

  uploadFile(event){
    const fileSelected: File = event.srcElement.files[0];
    this.imageFile = fileSelected

  }

  uploadAuthorFile(event){
    const fileSelected: File = event.srcElement.files[0];
    this.authorImageFile = fileSelected;
    let galleryImage =  document.getElementById('author-image') as HTMLImageElement;

    var reader = new FileReader();
      reader.onloadend = (function(data) {
        galleryImage.src = reader.result;

      })
      if (fileSelected) {
        reader.readAsDataURL(fileSelected);
      } else {
        galleryImage.src = "";
      }

      galleryImage.classList.remove('border')


  }

}
