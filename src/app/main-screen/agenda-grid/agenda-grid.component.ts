import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { Event } from '../../content-creator/classes/event';

@Component({
  selector: 'app-agenda-grid',
  templateUrl: './agenda-grid.component.html',
  styleUrls: ['./agenda-grid.component.css']
})
export class AgendaGridComponent implements OnInit {

  display: boolean = false;
  eventsList= new Array();
  newsId;

  constructor(private _router:Router, private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getEvents().subscribe(
      data=>{
        this.eventsList=data;
        this.setEventTitles(this.eventsList)
      },
      error=>{}
    )
  }


  public showDialog(position){
    this.display = true;
    let event = this.eventsList.find(i => i.position == position);
    document.querySelector('#dialog-title').textContent = event.title;
    document.querySelector('#dialog-content-paragraph').textContent = event.contentParagraph; 

  }

  public setEventTitles(eventsList){

    for(let event of eventsList){
      if(event.position == 1){
        document.querySelector('#event-title-1').innerHTML = event.title;

      } else if (event.position == 2){
        document.querySelector('#event-title-2').innerHTML = event.title;
  }

}
}
}
