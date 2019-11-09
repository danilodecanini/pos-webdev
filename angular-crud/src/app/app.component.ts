import { Component } from '@angular/core';

/**
 *  Esse App Component é o componente principal da nossa aplicação onde encapsula todos os outros componentes
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud';
}
