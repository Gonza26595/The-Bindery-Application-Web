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
        this.eventsList=data
      },
      error=>{}
    )
  }

  showDialog(id) {
    this.display = true;

    this._contentCreatorService.getEventById(id).subscribe(
      data => {

        this.setDialogValues(data);
      },
      error => {

      }
    )
  }

  public setDialogValues(event:Event){
    document.querySelector('#dialogTitle').textContent = event.title;
    document.querySelector('#dialogContentParagraph').textContent = event.contentParagraph;
  }

}
