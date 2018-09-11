import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-grid',
  templateUrl: './agenda-grid.component.html',
  styleUrls: ['./agenda-grid.component.css']
})
export class AgendaGridComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
}

}
