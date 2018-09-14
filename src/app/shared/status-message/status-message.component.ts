import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Key } from 'selenium-webdriver';


@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.css'],
  providers: [MessageService]
})
export class StatusMessageComponent implements OnInit,OnChanges {

  @Input() successMessage;
  @Input() errorMessage;





  constructor(private messageService:MessageService) { }

  ngOnInit() {

this.addContainerClass();
  }

  ngOnChanges(){

    if(this.successMessage != null){
    this.messageService.add({key:'c',severity:'success', summary:this.successMessage,life:5000});

  }

  if(this.errorMessage != null){
    this.messageService.add({key:'d',severity:'error', summary:this.errorMessage,life:5000});
  }


  }



addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                                {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
}


addContainerClass(){
  document.querySelector('#successMessage').firstElementChild.classList.add('container');
  document.querySelector('#errorMessage').firstElementChild.classList.add('container');
  document.querySelector('#sessionExpiredMessage').firstElementChild.classList.add('container');
}


  }













