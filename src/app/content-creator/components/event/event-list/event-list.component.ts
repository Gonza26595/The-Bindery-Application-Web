import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {


  eventsList = new Array();
  @Output() editEvent = new EventEmitter();

  constructor(private _contentCreatorService:ContentCreatorService,private _firebaseService:FirebaseService) { }

  ngOnInit() {

    //SQL-SERVER
    // this._contentCreatorService.getEvents().subscribe(
    //   data=>{
    //    this.eventsList = data;
    //   },
    //    error=>{

    //   }
    // )


    //FIREBASE
    this._firebaseService.getEvents().subscribe(
      data=>{
        this.eventsList = data;
      }
    )
  }

  public eventEdit(id){
    this.editEvent.emit(id);
  }

}
