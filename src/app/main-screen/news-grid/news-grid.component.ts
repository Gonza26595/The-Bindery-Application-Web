import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {


  newsList= new Array();
  newsId;

  constructor(private _router:Router, private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getNews().subscribe(
      data=>{
        this.newsList=data},
      error=>{}
    )
  }



  public goToDetail(id){
    this._router.navigate(['/news-detail/' + id ]);
  }



}
