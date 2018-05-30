import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddGames = [];
  evenGames = [];

  onOddGameAdded(oddGameData: {oddGameNumber: number}) {
    this.oddGames.push({
      number: oddGameData.oddGameNumber
    });

  }

  onEvenGameAdded(evenGameData: {evenGameNumber: number}) {
    this.evenGames.push({
      number: evenGameData.evenGameNumber
    });

  }
}
