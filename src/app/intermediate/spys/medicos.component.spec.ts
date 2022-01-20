import { HttpClient, HttpHandler } from '@angular/common/http';
import { MedicosService } from './medicos.service';
import { MedicosComponent } from './medicos.component';
import { of, throwError } from 'rxjs';

describe(`Spy's`, () => {

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

  it('Should return error as Observable if AddMedical request fails ', () => {
    const serviceError = 'AddMedical error!';
    spyOn(service, 'addMedical').and.returnValue(throwError(() => serviceError));
    component.addMedical();
    expect(component.errorMsg).toBe(serviceError);
  });

  it('Should call server to delete a medical', () => {
    const call = spyOn(service, 'deleteMedical').and.returnValue(of());
    const medicalIdToDelete = '1';
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteMedical(medicalIdToDelete);
    expect(call).toHaveBeenCalledOnceWith(medicalIdToDelete);
  });

  it(`Shouldn't call server if user says not`, () => {
    const call = spyOn(service, 'deleteMedical').and.returnValue(of());
    const medicalIdToDelete = '1';
    spyOn(window, 'confirm').and.returnValue(false);
    component.deleteMedical(medicalIdToDelete);
    expect(call).not.toHaveBeenCalledOnceWith(medicalIdToDelete);
  });



});
