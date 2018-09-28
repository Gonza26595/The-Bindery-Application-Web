import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit,OnChanges {

  @Input() dialogSelected
  @Input() position
  @Output() sendPosition = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
   console.log(this.dialogSelected);
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


    handleEventPreviewChecked(event, position){
      this.position = position
      if(event.checked){
      document.getElementById('event-preview-' + position).style.filter = "contrast(1)"
      setTimeout(() =>{
        this.sendPosition.emit({position:this.position,dialog:false});
      },500);

      } else {
        document.getElementById('event-preview-' + position).style.filter = "contrast(0.4)"
      }
      }

      handleImagePreviewChecked(event, position){
        this.position = position
        if(event.checked){
        document.getElementById('image-preview-' + position).style.filter = "contrast(1)"
        setTimeout(() =>{
          this.sendPosition.emit({position:this.position,dialog:false});
        },500);

        } else {
          document.getElementById('image-preview-' + position).style.filter = "contrast(0.4)"
        }
        }





  }








