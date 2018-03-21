import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // receive an event with the game number every second from set interval
  // create a ODD component if gameNUmber is odd, and create EVEN component if gameNumber is even
  // display number components in a list of paragraph tags

  // array of numbers
  gameNumbers = [];

  // if the start button is pressed, push the incremented number to gameNumbers array
  onGameStarted = (gameNumber: number) => {
    // push number to gameNumbers array
    this.gameNumbers.push(gameNumber);
  }
}
