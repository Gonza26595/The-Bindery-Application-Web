import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { News } from '../../../classes/news';
import * as moment from 'moment';

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



  constructor(private _contentCreateService:ContentCreatorService) {

    this.newsCreateForm = new FormGroup({
      section: new FormControl('',Validators.required),
      newsDate: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
      contentParagraph: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)

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
      this.newsPosition
    )



    return newNews
  }


  public saveNewNews(){
    let newNews = this.createNewsInstance();

    console.log(newNews);
    this._contentCreateService.saveNews(newNews).subscribe(
      data=>{
        this.successMessage = "La noticia fue creada exitosamente"
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


  getPosition(event){
    this.display = event.dialog
    this.newsPosition = event.position
  }

  showDialog() {
    this.display = true;
    this.news = 'news'
  }

}
