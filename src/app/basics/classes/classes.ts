

export class Player {

  hp!: number;

  constructor() {
    this.hp = 100;
  }

  receiveDamage( damage: number ) {

    this.hp = damage >= this.hp ? 0 : this.hp - damage;
    return this.hp;

  }

}
