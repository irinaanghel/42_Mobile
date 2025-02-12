import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule],
})
export class AppComponent {

  
  isPortrait: boolean = true;
  
  constructor() {
    this.checkOrientation();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkOrientation();
  }
  
  checkOrientation() {
    this.isPortrait = window.matchMedia("(orientation: portrait)").matches;
  }
  showPress(value: string | number){
    console.log(value);
  }
}
