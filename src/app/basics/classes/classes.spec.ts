import { Player } from './classes';


describe('Classes test', () => {

  let player = new Player();

  beforeEach(() => {
    player.hp = 100;
  });


  it('Should return 20 if player receive 80', () => {

    player.receiveDamage(80);
    expect(player.hp).toBe(20);

  });

  it('Should return 50 if player receive 50', () => {

    player.receiveDamage(50);
    expect(player.hp).toBe(50);

  });

  it('should return 0 if player receive 1000', () => {

    player.receiveDamage(1000);
    expect(player.hp).toBe(0);

  });

});
