import { getRobots } from "./array";


describe('Array Tests', () => {

  const robots = getRobots();

  it('Should return at least three robots', () => {

    expect(robots.length).toBeGreaterThanOrEqual(3);

  });

  it('Should contain MegaMan and RoboCop', () => {

    expect( robots ).toContain('MegaMan');
    expect( robots ).toContain('RoboCop');

  });


});
