import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    
  }



  public goToDetail(){
    this._router.navigate(['/news-detail']);
  }



}
