import { HttpClient, HttpHandler } from '@angular/common/http';
import { MedicosService } from './medicos.service';
import { MedicosComponent } from './medicos.component';
import { of } from 'rxjs';

describe('Description', () => {

  let component: MedicosComponent;
  const service = new MedicosService({} as HttpClient);
  beforeEach(() => {
    component= new MedicosComponent(service);
  });

  it('Should load the Medicals', () => {
    const fakeMedicals = ['DrOn', 'DrAndrew', 'DrDaniel'];
    spyOn( service, 'getMedicals').and.returnValue(of(fakeMedicals));

    component.ngOnInit();
    expect( component.medicals.length ).toBeGreaterThan(0);
  });

  it('Should call server to add a medical', () => {
    const spy = spyOn( service, 'addMedical' ).and.returnValue(of());
    component.addMedical();
    expect(spy).toHaveBeenCalled();
  });

  it('Should add a new medical to medicals array', () => {
    const medical = {id: 1, nombre: 'Juan'}
    spyOn(service, 'addMedical').and.returnValue(of(medical));
    component.addMedical();
    expect(component.medicals.indexOf(medical)).toBeGreaterThanOrEqual(0);
  });



});
