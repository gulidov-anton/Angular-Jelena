import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApplication';
  search = '';
  isVisible: boolean = true;
  e: number = Math.E;
  str: string = 'Text';
  float: number = 3.45;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    }
  }
}
