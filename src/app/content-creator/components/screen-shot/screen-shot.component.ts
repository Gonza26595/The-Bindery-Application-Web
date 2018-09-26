import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit {

  position
  @Output() sendPosition = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  handlePreviewChecked(event, position){
    this.position = position
    if(event.checked){
    document.getElementById('preview-' + position).style.filter = "contrast(1)"
    setTimeout(() =>{
      this.sendPosition.emit({position:this.position,dialog:false});
    },500);

    } else {
      document.getElementById('preview-' + position).style.filter = "contrast(0.4)"
    }
    }





  }








