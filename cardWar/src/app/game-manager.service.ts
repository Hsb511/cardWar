import { Injectable } from '@angular/core';
import { Card } from './back/card';
import { CARDS } from './back/mock-cards';
import { Player } from './back/player';

@Injectable()
export class GameManagerService {

  cards: Card[] = CARDS;

  constructor(private gameManager: GameManagerService) { }

  shuffle(): void {
    //mélange des cartes
  }


}
