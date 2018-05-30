import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameTimer;
  @Input() gameInt: number;

  constructor() {

  }

  ngOnInit() {

  }


  startGameTimer() {
    this.gameTimer = setInterval(() => this.logTimer(), 1000);

  }

  logTimer() {
    console.log(this.gameInt);
    this.gameInt++;

  }

  stopGameTimer() {
    clearInterval(this.gameTimer);
  }
}
