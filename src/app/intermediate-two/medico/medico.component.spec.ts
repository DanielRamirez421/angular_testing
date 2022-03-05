import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MedicoService } from './medico.service';
import { MedicoComponent } from './medico.component';
import { of } from 'rxjs';

describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;
  const medicoService = new MedicoService({} as HttpClient)


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent,
      ],
      providers: [
        MedicoService // here are the service we will se un the test
      ],
      imports: [
        HttpClientModule
      ]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });



  it('Should create component', () => {
    expect(component).toBeTruthy()
  });



  it('Should return medical name', () => {
    const medicalName = 'Juan';
    const greeting = component.sayHiMedical(medicalName);
    expect(greeting).toContain(medicalName);
  });



  it('Should save an array of medicals names', () => {
    const fakeMedicalsNames = ['Daniel Ramirez', 'John Doe'];
    spyOn( component.medicoService, 'getMedicals').and.returnValue(of( fakeMedicalsNames ));
    component.ngOnInit();
    expect( component.medicals ).toBe( fakeMedicalsNames );
  });






});
