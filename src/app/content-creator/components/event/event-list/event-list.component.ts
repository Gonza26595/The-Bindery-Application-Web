import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {


  eventsList = new Array();
  @Output() editEvent = new EventEmitter();

  constructor(private _contentCreatorService:ContentCreatorService) { }

  ngOnInit() {
    this._contentCreatorService.getEvents().subscribe(
      data=>{
       this.eventsList = data;
      },
       error=>{

      }
    )
  }

  public eventEdit(id){
    this.editEvent.emit(id);
  }

}
