import { Component, OnInit } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { FirebaseService } from '../../shared/firebase/firebase.service';




@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css'],
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

      setTimeout(() => {
        mainImages[mainImage].style.display = "block"
      }, 800);





    }
  }

    let loaderImages = document.getElementsByClassName('loader-image') as HTMLCollectionOf<HTMLElement>;

    if (loaderImages.length != 0) {
      for(let loaderImage = 0;loaderImage < 8; loaderImage++){
        setTimeout(() => {
          loaderImages[loaderImage].style.display = "none"
        }, 800);

      }
    }

  }


}
