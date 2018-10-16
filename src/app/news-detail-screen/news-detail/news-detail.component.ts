import { Component, OnInit } from '@angular/core';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { News } from '../../content-creator/classes/news';
import * as moment from 'moment';
import { FirebaseService } from '../../shared/firebase/firebase.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {


  newsList = new Array();
  asideList = new Array();
  newsId;
  asideNews1;
  asideNews2;
  asideNews3;

  constructor(private _router:Router,private _contentCreatorService:ContentCreatorService,private _firebaseService:FirebaseService, private _activateRoute:ActivatedRoute) { }

  ngOnInit() {

    this.newsId= this._activateRoute.snapshot.paramMap.get('newsId');

    //SQL-SERVER
    // this._contentCreatorService.getNewsById(this.newsId).subscribe(
    //   data=>{
    //     this.setNewsDetail(data);
    //   },
    //   error=>{}
    // )

    //FIREBASE
    this._firebaseService.getNewsById(this.newsId).subscribe(
      data=>{
        this.setNewsDetail(data);
      },
      error=>{}
    )

    //SQL-SERVER
    // this._contentCreatorService.getNews().subscribe(
    //    data=>{
    //      this.newsList = data;
    //      this.setAsideNews(this.newsList);
    //    },
    //    error=>{}
    // )

    //FIREBASE
    this._firebaseService.getNews().subscribe(
      data=>{
        this.newsList = data;
        this.setAsideNews1(this.newsList);
        this.setAsideNews2(this.newsList);
        this.setAsideNews3(this.newsList);
      },
      error=>{}
   )


   this._firebaseService.getAuthorNewsImageById(this.newsId).subscribe(
     data=>{
      let galleryImage =  document.getElementById('author-image') as HTMLImageElement;
      galleryImage.src = data;
     }
   )
  }



  public setNewsDetail(news){

    var dateISO = news.newsDate
    var newsDate = moment(dateISO).utc().format('MMM Do YY');


    document.querySelector('.section').textContent = news.section;
    document.querySelector('.date').textContent = newsDate;
    document.querySelector('.title').textContent = news.title;
    document.querySelector('.author-name').textContent = news.author;
    document.querySelector('.author-name-1').textContent = news.author;
    document.querySelector('#author-description').textContent = news.authorDescription
    document.querySelector('#contentParagraph').innerHTML = news.contentParagraph;

  }


  public setAsideNews1(newsList){
    var news1 = newsList[Math.floor(Math.random() * newsList.length)];
    document.getElementById('aside-1').innerHTML = news1.title;
    this.asideNews1 = news1
    newsList.splice(newsList.indexOf(news1),1);
  }

  public setAsideNews2(newsList){
    var news2 = newsList[Math.floor(Math.random() * newsList.length)];
    document.getElementById('aside-2').innerHTML = news2.title;
    this.asideNews2 = news2;
    newsList.splice(newsList.indexOf(news2),1);
  }

  public setAsideNews3(newsList){
    var news3 = newsList[Math.floor(Math.random() * newsList.length)];
    document.getElementById('aside-3').innerHTML = news3.title;
    this.asideNews3 = news3
  }

  public goToAsideNewsDetail(position){
    if(position == 1){
      this._router.navigate(['/news-detail/' + this.asideNews1.id]);
      location.reload();
    } else if(position == 2){
      this._router.navigate(['/news-detail/' + this.asideNews2.id]);
      location.reload();
    } else if(position == 3){
      this._router.navigate(['/news-detail/' + this.asideNews3.id]);
      location.reload();
    }

  }



}
