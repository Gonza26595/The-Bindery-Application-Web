import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList = new Array();
  @Output() editNews = new EventEmitter();

  constructor(private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getNews().subscribe(
      data=>{
       this.newsList = data;
      },
       error=>{

      }
    )
  }

  public newsEdit(id){
    this.editNews.emit(id);
  }

}
