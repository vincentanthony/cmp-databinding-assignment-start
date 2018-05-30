import {Component, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddGameCreated = new EventEmitter<{oddGameNumber: number}>();
  @Output() evenGameCreated = new EventEmitter<{evenGameNumber: number}>();
  gameTimer;
  gameInt = 0;


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
    if (this.gameInt % 2 === 0) {
      this.onAddEvenGame();
    } else {
      this.onAddOddGame();
    }

  }

  stopGameTimer() {
    clearInterval(this.gameTimer);
  }

  onAddOddGame() {
    this.oddGameCreated.emit({oddGameNumber: this.gameInt});
  }

  onAddEvenGame() {
    this.evenGameCreated.emit({evenGameNumber: this.gameInt});
  }




}
