import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isPortrait: boolean = true;
  expression: string = ''; // Stringa dell'espressione
  result: string = '0'; // Risultato calcolato
  
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

  showPress(value: string | number) {
    if (value === 'AC') {
      this.expression = '';
      this.result = '0';
      return;
    } else if (value === 'C') {
      this.expression = this.expression.slice(0, -1);
      return;
    } else if (value === '=') {
      this.calculateResult();
      return;
    }

    let newExpression = this.expression + (value === 'X' ? '*' : value);

    newExpression = newExpression.replace(/(?<!\.\b)\b0+(?=\d+(\D|$))/g, '');

    this.expression = newExpression;
  }

  calculateResult() {
    try {
      const evalResult = eval(this.expression);
      this.result = evalResult.toString();
      this.expression = this.result;
    } catch (error) {
      this.result = 'Errore';
    }
  }
}







