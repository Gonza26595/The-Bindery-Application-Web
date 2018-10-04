import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList = new Array();
  @Output() editNews = new EventEmitter();

  constructor(private _contentCreatorService:ContentCreatorService, private _firebaseService:FirebaseService) { }

  ngOnInit() {

    //SQL-SERVER
    // this._contentCreatorService.getNews().subscribe(
    //   data=>{
    //    this.newsList = data;
    //   },
    //    error=>{

    //   }
    // )

    //FIREBASE
    this._firebaseService.getNews().subscribe(
      data=>{
        this.newsList = data;
      }
    )
  }

  public newsEdit(id){
    this.editNews.emit(id);
  }

}
