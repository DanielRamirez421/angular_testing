import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;



    beforeEach( async () => {
        await TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        })
        .compileComponents();
    });

    beforeEach( () => {
      fixture = TestBed.createComponent(IncrementadorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })




    it('Should create IncrementadorComponent', () => {
      expect(component).toBeTruthy();
    });




    it('should show progress and legend', () => {

      component.leyenda = 'proceso de carga'; // ╬
      component.progreso = 60;
      fixture.detectChanges(); // enable changes detection. Is mandatory after ╬

      const element: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
      const valueElement = element.innerHTML;
      expect( valueElement ).toContain( component.progreso.toString() )
      expect( valueElement ).toContain( component.leyenda );

    });



    it('should decrement progreso value', () => {

      component.progreso = 100;
      const button = fixture.debugElement.query( By.css('button') );
      button.triggerEventHandler( 'click', () => {});
      expect( component.progreso ).toBe(95);

    });





    it('Should show progress in input (WhenStable)', async () => { // Super importante!!

      component.cambiarValor(5);
      fixture.detectChanges();

      await fixture.whenStable().then(() => {

        fixture.detectChanges();

        const input = fixture.debugElement.query( By.css('input') );
        const inputElement = input.nativeElement;

        expect( inputElement.value ).toBe( '55' );
      });

    });





    it('should change progreso value when input changes', () => {

      const valueToInput = '55';

      const inputCounter = fixture.debugElement.query(By.css('input'));
      inputCounter.nativeElement.value = valueToInput;

      inputCounter.nativeElement.dispatchEvent(new Event('input'));

      expect( component.progreso ).toBe( parseInt( valueToInput ) );

    });











});
