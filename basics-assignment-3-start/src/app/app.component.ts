import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  buttonClicks = [];

  toggleDisplay = event => {
    this.displayParagraph = !this.displayParagraph;
    // push button click event to button click array
    this.addButtonClick(event);
  }

  addButtonClick = event => {
    const timeNow = new Date();
    this.buttonClicks.push(`Event Occured: ${event.type}
      on ${event.target.tagName}: ${event.target.textContent}
      at ${timeNow.toLocaleTimeString()}`);
  }
}
