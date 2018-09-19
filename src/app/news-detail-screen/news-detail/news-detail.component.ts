import { Component, OnInit } from '@angular/core';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { News } from '../../content-creator/classes/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private _contentCreatorService:ContentCreatorService, private _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let newsid= this._activateRoute.snapshot.paramMap.get('newsId');

    this._contentCreatorService.getNewsById(newsid).subscribe(
      data=>{
        this.setNewsDetail(data);
      },
      error=>{

      }
    )
  }



  public setNewsDetail(news:News){
    document.querySelector('.section').textContent = news.section;
    document.querySelector('.date').textContent = news.newsDate;
    document.querySelector('.title').textContent = news.title;
    document.querySelector('#author').textContent = news.author;
    document.querySelector('#contentParagraph').textContent = news.contentParagraph;

  }

}
