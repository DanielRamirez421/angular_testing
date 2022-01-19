import { message } from "./string";

describe('String tests', () => {

  it('Should return a string', () => {

    const msg = message('Daniel');
    expect(typeof(msg) === 'string').toBeTruthy();
    expect(msg).toBe('saludos Daniel');

  });

  it('Should contain name', () => {

    const name = 'Daniel';
    const msg = message( name );

    expect(msg.includes( name )).toBeTruthy();
    expect(msg).toContain( name );

  });


});
