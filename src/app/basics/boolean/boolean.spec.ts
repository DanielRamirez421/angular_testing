import { isUserIn } from "./boolean";

describe('Booleans tests', () => {

  it('Should return true', () => {

    const userStatus = isUserIn();
    expect( userStatus ).toBeTruthy();

  });

});
