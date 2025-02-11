import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}

  message = 'A Simple Text';

  showPress(){
    this.message = this.message === 'A Simple Text' ? 'Hello World' : 'A Simple Text';
  }
}
