import { Component, OnInit } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { Footer } from '../../../../node_modules/primeng/components/common/shared';
import { FirebaseService } from '../../shared/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fadeInContent } from '../../../../node_modules/@angular/material';
import { $ } from '../../../../node_modules/protractor';
import { trigger, state, transition, style, animate } from '../../../../node_modules/@angular/animations';


@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css'],
  animations: [
    trigger('Fading', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('500ms ease-out')),
      transition(':leave', animate('500ms ease-in')),
    ])
  ]
})
export class NewsGridComponent implements OnInit {


  newsList= new Array();
  newsImagesList = new Array();
  newsId;
  detailList = new Array();
  loader:boolean = true;



  constructor(private _router:Router,
              private _contentCreatorService:ContentCreatorService,
              private _firebaseService:FirebaseService) {

              }






  ngOnInit() {




    //SQL-SERVER
    // this._contentCreatorService.getNews().subscribe(
    //   data=>{
    //     this.newsList=data
    //    this.setNewsTitles(this.newsList);
    //   },
    //   error=>{}
    // )

    this.newsImagesList = this._firebaseService.getNewsImages();

    //FIREBASE
    this._firebaseService.getNews().subscribe(
      data=>{

        this.newsList = data
        this.setNewsTitles(this.newsList);


      }
   )





  }









public goToDetail(position){
  let news = this.newsList.find(i => i.position == position);
 console.log(news);
  this._router.navigate(['/news-detail/' + news.id]);

}



  public setNewsTitles(newsList){

    for(let news of newsList){
      if(news.position == 1){
        document.querySelector('#news-title-1').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 2){
        document.querySelector('#news-title-2').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 3){
        document.querySelector('#news-title-3').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 4){
        document.querySelector('#news-title-4').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 5){
        document.querySelector('#news-title-5').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 6){
        document.querySelector('#news-title-6').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 7){
        document.querySelector('#news-title-7').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);
      } else if (news.position == 8){
        document.querySelector('#news-title-8').innerHTML = news.title;
        this.setNewsImagesById(news.id,news.position);

      }
    }
  }


  public setNewsImagesById(newsId,imagePosition){
    this._firebaseService.getNewsImageById(newsId).subscribe(
      data=>{
        if(data != undefined){
       let newsImage =  document.getElementById('news-image-' + imagePosition) as HTMLImageElement;
       newsImage.src = data;
       this.hideLoaderImage();

      }
    }
    )
  }


  public hideLoaderImage(){
    let mainImages = document.getElementsByClassName('news-content') as HTMLCollectionOf<HTMLElement>;

    if (mainImages.length != 0) {
    for(let mainImage = 0;mainImage < 8; mainImage++){

      mainImages[mainImage].style.display = "block"



    }
  }

    let loaderImages = document.getElementsByClassName('loader-image') as HTMLCollectionOf<HTMLElement>;

    if (loaderImages.length != 0) {
      for(let loaderImage = 0;loaderImage < 8; loaderImage++){
        loaderImages[loaderImage].style.display = "none"
      }
    }

  }


}
