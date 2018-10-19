import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { ContentCreatorService } from '../../content-creator/services/content-creator.service';
import { Event } from '../../content-creator/classes/event';
import { FirebaseService } from '../../shared/firebase/firebase.service';

@Component({
  selector: 'app-agenda-grid',
  templateUrl: './agenda-grid.component.html',
  styleUrls: ['./agenda-grid.component.css']
})
export class AgendaGridComponent implements OnInit {

  display: boolean = false;
  eventsList= new Array();
  eventImagesList = new Array();
  newsId;
  eventImage;
  eventTitle;
  contentParagraph;
  imageElement;
  imageWidth;

  constructor(private _router:Router, private _contentCreatorService:ContentCreatorService,private _firebaseService:FirebaseService) { }

  ngOnInit() {

    // SQL-SERVER
    // this._contentCreatorService.getEvents().subscribe(
    //   data=>{
    //     this.eventsList=data;
    //     this.setEventTitles(this.eventsList)
    //   },
    //   error=>{}
    // )

    //FIREBASE
    this.eventImagesList = this._firebaseService.getEventImages();


    this._firebaseService.getEvents().subscribe(
      data=>{
        this.eventsList=data;
        this.setEventTitles(this.eventsList)
      },
      error=>{}
    )



  }


  public showDialog(position){


       let event = this.eventsList.find(i => i.position == position);
       let eventImage = this.eventImagesList.find(i => i.position == position);
       this.eventTitle = event.title;
       this.contentParagraph = event.contentParagraph;
       this.eventImage = eventImage.image;
       this.display = true;

  }




  public setEventTitles(eventsList){

    for(let event of eventsList){
      if(event.position == 1){
        document.querySelector('#event-title-1').innerHTML = event.title;
      } else if (event.position == 2){
        document.querySelector('#event-title-2').innerHTML = event.title;
      }
      this.hideEventLoader();

}
}



public hideEventLoader(){
  setTimeout(() => {
    document.getElementById('event-content').style.display = "block"
  }, 800);


  setTimeout(() => {
    document.getElementById('loader-event').style.display = "none"
  }, 800);

}







}
