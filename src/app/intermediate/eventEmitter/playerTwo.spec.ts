import { PlayerTwo } from './playerTwo';

describe('Classes intermediate tests', () => {

  let playerTwo: PlayerTwo = new PlayerTwo();
  beforeEach(() => playerTwo.hp =  100);

  it('Should return 0 when player receive 1000 of damage', () => {

    let playerHp: Number = 0;
    playerTwo.hpChange.subscribe( hp => playerHp = hp);

    playerTwo.receiveDamage(2000);
    expect(playerHp).toBe(0)

  });

  it('Should return 50 when player receive 50 of damage', () => {

    let playerHp: Number = 0;
    playerTwo.hpChange.subscribe( hp => playerHp = hp);

    playerTwo.receiveDamage(50);
    expect(playerHp).toBe(50);

  });


});
