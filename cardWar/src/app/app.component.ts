import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CARDS } from './back/mock-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardWar';
  cards = CARDS;
}
