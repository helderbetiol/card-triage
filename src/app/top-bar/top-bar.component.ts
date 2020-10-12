import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() notifySearch = new EventEmitter(); // emit text inputted to card listing component

  constructor() { }

  ngOnInit(): void {
  }

}
