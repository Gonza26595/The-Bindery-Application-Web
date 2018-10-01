import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { Event } from '../../../classes/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  eventEditForm: FormGroup;
  @Output() goBack = new EventEmitter<boolean>();
  @Input() eventId;
  successMessage;
  display:boolean;
  event;
  eventPosition;

  constructor(private _contentCreateService:ContentCreatorService) {

    this.eventEditForm = new FormGroup({
      title : new FormControl('',Validators.required),
      contentParagraph : new FormControl('',Validators.required)
    })

   }

  ngOnInit() {
    this._contentCreateService.getEventById(this.eventId).subscribe(
      data=>{this.setEventValues(data)},
      error=>{}
    );
  }


  public setEventValues(event:Event){
    this.eventEditForm.controls['title'].setValue(event.title);
    this.eventEditForm.controls['contentParagraph'].setValue(event.contentParagraph);
    this.eventPosition = event.position;
  }


  public back(){
    this.goBack.emit(false);
  }


  public createEventInstance():Event{
    let eventUpdated = new Event(
      this.eventEditForm.value.title,
      this.eventEditForm.value.contentParagraph,
      this.eventPosition
    )

    return eventUpdated
  }


  public updateEvent(){
    let eventUpdated = this.createEventInstance();

    this._contentCreateService.updateEvent(this.eventId,eventUpdated).subscribe(
      data=>{
        this.successMessage= new String('El evento ha sido actualizado');
        setTimeout(() =>{
          this.back();
        },2000);
      },
      error=>{

      }
    )
  }


  showDialog() {
    this.display = true;
    this.event = 'event';
  }

  getPosition(event){
    this.display = event.dialog
    this.eventPosition = event.position
  }

}



