import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { Location } from '../../../../../node_modules/@angular/common';
import { ContentCreatorService } from '../../services/content-creator.service';
import { Event } from '../../classes/event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {


  eventCreateForm: FormGroup;
  @Output() goBack = new EventEmitter<boolean>();
  successMessage;

  constructor(private _location:Location,private _contentCreateService:ContentCreatorService) {

    this.eventCreateForm = new FormGroup({
      title : new FormControl('',Validators.required),
      contentParagraph : new FormControl('',Validators.required)
    })

   }

  ngOnInit() {
  }


  public back(){
    this.goBack.emit(false);
  }


  public createEventInstance():Event{
    let newEvent = new Event(
      this.eventCreateForm.value.title,
      this.eventCreateForm.value.contentParagraph
    )

    return newEvent
  }


  public saveNewEvent(){
    let newEvent = this.createEventInstance();

    this._contentCreateService.saveEvent(newEvent).subscribe(
      data=>{
        this.successMessage= "El evento fue creado exitosamente"
      },
      error=>{

      }
    )
  }
}
