import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  text = '';

  resetUsername = () => {
    this.username = '';
    this.text = 'Username has been reset!';
  }

  resetText = () => {
    this.text = `Username = ${this.username}!`;
  }
}
