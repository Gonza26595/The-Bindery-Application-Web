import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../../node_modules/@angular/forms';
import { Location } from '../../../../../../node_modules/@angular/common';
import { ContentCreatorService } from '../../../services/content-creator.service';
import { Event } from '../../../classes/event';
import { FirebaseService } from '../../../../shared/firebase/firebase.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {


  display:boolean;
  eventCreateForm: FormGroup;
  @Output() goBack = new EventEmitter<boolean>();
  successMessage;
  disableButtonSave: boolean = false;
  event;
  eventPosition: number = 0;
  imageFile: File;

  constructor(private _location:Location,
              private _contentCreateService:ContentCreatorService,
              private _firebaseService:FirebaseService,
              private _sharedService:SharedService) {

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
      this.eventCreateForm.value.contentParagraph,
      this.eventPosition
    )

    return newEvent
  }


  public saveNewEvent(){
    let newEvent = this.createEventInstance();

    //SQL-SERVER
    // this._contentCreateService.saveEvent(newEvent).subscribe(
    //   data=>{
    //     this.successMessage= "El evento fue creado exitosamente"
    //     this.disableButtonSave = true;
    //     setTimeout(() =>{
    //       this.back();
    //     },2000);
    //   },
    //   error=>{

    //   }
    // )

    //FIREBASE


      this._firebaseService.saveEvent(newEvent,this.imageFile);
      this.successMessage = "el evento se creo exitosamente"
    setTimeout(()=>{
      this.back();
    },4000)}


  showDialog() {
    this.display = true;
    this.event = 'event'
  }

  getPosition(event){
    this.display = event.dialog
    this.eventPosition = event.position
  }

  uploadFile(event){
    const fileSelected: File = event.srcElement.files[0];
    this.imageFile = fileSelected

  }
}
