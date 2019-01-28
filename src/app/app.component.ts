import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  clicksArray = [];
  counter: number = 1;

  showOrHideParagraph() {
    this.displayParagraph = !this.displayParagraph;
    this.clicksArray.push(this.counter);
    this.counter++;
  }

}
