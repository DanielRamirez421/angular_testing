import { incrementNumber } from "./number";


describe('Numbers tests', () => {

  it('Should return condition, if input number be major than condition', () => {

    const condition = 100;
    const minor = 50;
    const major = 150;

    const ans1 = incrementNumber( minor, condition );
    const ans2 = incrementNumber( major, condition );

    expect( minor < condition && ans1 === minor+1  ).toBeTruthy();
    expect( major > condition && ans2 === condition  ).toBeTruthy();

  });

});
