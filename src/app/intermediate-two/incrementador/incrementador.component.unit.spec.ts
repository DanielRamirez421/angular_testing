import { IncrementadorComponent } from './incrementador.component';



describe('Incrementador component unit testing', () => {


  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });



  it('Progress should not pass 100 when increment', () => {

    component.progreso = 100;
    component.cambiarValor( 5 );

    expect(component.progreso ).toBe( 100 );

  });



});
