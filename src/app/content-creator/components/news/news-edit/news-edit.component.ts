import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { News } from '../../../classes/news';
import * as moment from 'moment';


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



  constructor(private _contentCreateService:ContentCreatorService) {

    this.newsEditForm = new FormGroup({
      section: new FormControl('',Validators.required),
      newsDate: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
      contentParagraph: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)

    })

   }

   ngOnInit() {
    this._contentCreateService.getNewsById(this.newsId).subscribe(
      data=>{this.setNewsValues(data)},
      error=>{}
    );
  }


  public setNewsValues(news:News){

    var dateISO = news.newsDate
    var newsDate = moment(dateISO).utc().format('DD-MM-YYYY');


    this.newsEditForm.controls['title'].setValue(news.title);
    this.newsEditForm.controls['contentParagraph'].setValue(news.contentParagraph);
    this.newsEditForm.controls['newsDate'].setValue(newsDate);
    this.newsEditForm.controls['author'].setValue(news.author);
    this.newsEditForm.controls['section'].setValue(news.section);
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
      this.newsEditForm.value.section
    )

    return newsUpdated
  }


  public updateNews(){
    let newsUpdated = this.createNewsInstance();

    this._contentCreateService.updateNews(this.newsId,newsUpdated).subscribe(
      data=>{
        this.successMessage = new String('La noticia ha sido actualizada');
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
