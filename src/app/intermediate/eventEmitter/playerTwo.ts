import { EventEmitter } from '@angular/core';

export class PlayerTwo {

  hp!: number;
  hpChange = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  receiveDamage( damage: number ) {

    this.hp = damage >= this.hp ? 0 : this.hp - damage;
    this.hpChange.emit(this.hp);
  }

}
