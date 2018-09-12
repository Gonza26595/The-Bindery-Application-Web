import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
}

}
