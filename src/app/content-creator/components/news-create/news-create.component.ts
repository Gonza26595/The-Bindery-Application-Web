import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../services/content-creator.service';
import { News } from '../../classes/news';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {


  newsCreateForm: FormGroup
  @Output() goBack = new EventEmitter<boolean>();
  successMessage;



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
    let newNews = new News(
      this.newsCreateForm.value.title,
      this.newsCreateForm.value.contentParagraph,
      this.newsCreateForm.value.newsDate,
      this.newsCreateForm.value.author,
      this.newsCreateForm.value.section
    )

    return newNews
  }


  public saveNewNews(){
    let newNews = this.createNewsInstance();

    this._contentCreateService.saveNews(newNews).subscribe(
      data=>{
        this.successMessage = "La noticia fue creada exitosamente"
      },
      error=>{

      }
    )
  }

  public back(){
    this.goBack.emit(false);
  }

}
