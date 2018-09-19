import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { News } from '../../../classes/news';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

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
    this.newsEditForm.controls['title'].setValue(news.title);
    this.newsEditForm.controls['contentParagraph'].setValue(news.contentParagraph);
    this.newsEditForm.controls['newsDate'].setValue(news.newsDate);
    this.newsEditForm.controls['author'].setValue(news.author);
    this.newsEditForm.controls['section'].setValue(news.section);
  }


  public createNewsInstance():News{
    let newsUpdated = new News(
      this.newsEditForm.value.title,
      this.newsEditForm.value.contentParagraph,
      this.newsEditForm.value.newsDate,
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
