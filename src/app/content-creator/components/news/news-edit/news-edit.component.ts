import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { News } from '../../../classes/news';
import * as moment from 'moment';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';
import { SharedService } from '../../../../shared/services/shared.service';


@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  newsEditForm: FormGroup
  @Output() goBack = new EventEmitter<boolean>();
  @Input() newsId;
  successMessage;
  display:boolean = false;
  newsPosition: number;
  news;



  constructor(private _contentCreateService:ContentCreatorService, 
              private _firebaseService:FirebaseService,
              private _sharedService: SharedService) {

    this.newsEditForm = new FormGroup({
      section: new FormControl('',Validators.required),
      newsDate: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
      contentParagraph: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)

    })

   }

   ngOnInit() {

    //SQL-SERVER
    // this._contentCreateService.getNewsById(this.newsId).subscribe(
    //   data=>{this.setNewsValues(data); },
    //   error=>{}
    // );


    //FIREBASE
    this._firebaseService.getNewsById(this.newsId).subscribe(

      data=>{this.setNewsValues(data)},
      error=>{}
    )
  }


  public setNewsValues(news){

    var dateISO = news.newsDate
    var newsDate = moment(dateISO).utc().format('DD-MM-YYYY');


    this.newsEditForm.controls['title'].setValue(news.title);
    this.newsEditForm.controls['contentParagraph'].setValue(news.contentParagraph);
    this.newsEditForm.controls['newsDate'].setValue(newsDate);
    this.newsEditForm.controls['author'].setValue(news.author);
    this.newsEditForm.controls['section'].setValue(news.section);
    this.newsPosition = news.position
  }


  public createNewsInstance():News{

    var newsDate
      if(this.newsEditForm.value.newsDate.includes('-')){
        let array = this.newsEditForm.value.newsDate.split('-');
        newsDate = new Date(array[2],array[1]-1,array[0]).toISOString().substring(0,10);
      } else {
        let array = this.newsEditForm.value.newsDate.split('/');
        newsDate = new Date(array[2],array[1]-1,array[0]).toISOString().substring(0,10);
      }


    let newsUpdated = new News(
      this.newsEditForm.value.title,
      this.newsEditForm.value.contentParagraph,
      newsDate,
      this.newsEditForm.value.author,
      this.newsEditForm.value.section,
      this.newsPosition
    )


    return newsUpdated
  }


  public updateNews(){
    let newsUpdated = this.createNewsInstance();
    console.log(newsUpdated);

    //SQL-SERVER
    // this._contentCreateService.updateNews(this.newsId,newsUpdated).subscribe(
    //   data=>{
    //     this.successMessage = new String('La noticia ha sido actualizada');
    //     setTimeout(() =>{
    //       this.back();
    //     },2000);
    //   },
    //   error=>{

    //   }
    // )

    //FIREBASE
    this._firebaseService.updateNews(this.newsId,newsUpdated)
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
    this.news = 'news'
  }

  getPosition(event){
    this.display = event.dialog
    this.newsPosition = event.position
  }

  uploadFile(event){
    const fileSelected: File = event.srcElement.files[0];
    this._sharedService.uploadFile(fileSelected)
    console.log(fileSelected)

  }

}
