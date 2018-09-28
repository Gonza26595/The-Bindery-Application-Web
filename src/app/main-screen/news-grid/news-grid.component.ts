import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { Footer } from '../../../../node_modules/primeng/components/common/shared';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {


  newsList= new Array();
  newsId;
  detailList = new Array();


  constructor(private _router:Router, private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getNews().subscribe(
      data=>{
        this.newsList=data
       this.setNewsTitles(this.newsList);
      },
      error=>{}
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

      } else if (news.position == 2){
        document.querySelector('#news-title-2').innerHTML = news.title;

      } else if (news.position == 3){
        document.querySelector('#news-title-3').innerHTML = news.title;

      } else if (news.position == 4){
        document.querySelector('#news-title-4').innerHTML = news.title;

      } else if (news.position == 5){
        document.querySelector('#news-title-5').innerHTML = news.title;

      } else if (news.position == 6){
        document.querySelector('#news-title-6').innerHTML = news.title;

      } else if (news.position == 7){
        document.querySelector('#news-title-7').innerHTML = news.title;

      } else if (news.position == 8){
        document.querySelector('#news-title-8').innerHTML = news.title;

      }
    }
  }


}
