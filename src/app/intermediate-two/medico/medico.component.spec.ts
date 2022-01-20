import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';

describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent,
      ],
      providers: [],
      imports: []
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

});
