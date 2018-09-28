import { Component, OnInit } from '@angular/core';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { News } from '../../content-creator/classes/news';
import * as moment from 'moment';

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

    var dateISO = news.newsDate
    var newsDate = moment(dateISO).utc().format('MMM Do YY');


    document.querySelector('.section').textContent = news.section;
    document.querySelector('.date').textContent = newsDate;
    document.querySelector('.title').textContent = news.title;
    document.querySelector('#author').textContent = news.author;
    document.querySelector('#contentParagraph').innerHTML = news.contentParagraph;

  }

}
