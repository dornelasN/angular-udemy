import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameInterval = null;
  gameNumber = 0;
  @Output() startGame = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  // an event - holding an incrementing number - should get emitted each second
  onStartClick() {
    // start an event
    this.gameInterval = setInterval(this.incrementNumbers, 1000);
    console.log('START clicked!');
  }

  // start incrementing number as START was clicked.
  incrementNumbers = () => {
    this.gameNumber++;
    console.log('number: ' + this.gameNumber);
    this.startGame.emit(this.gameNumber);
  }

  // no more events should get emitted : clearINterval(ref)
  onStopClick = () => {
    if (this.gameInterval != null) {
      clearInterval(this.gameInterval);
      console.log('STOP clicked!');
    }
  }
}
