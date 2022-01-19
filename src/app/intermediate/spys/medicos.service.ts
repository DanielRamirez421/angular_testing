import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicals() {
    return this.http.get('...').pipe(
      map( (resp: any) => resp['medicos'] )
    );

  }

  addMedical( medico: any ) {
    return this.http.post('...', medico ).pipe(
      map( (resp: any) => resp['medico'] )
    )
  }

  deleteMedical( id: string ) {
    return this.http.delete('...' ).pipe(
      map( (resp: any) => resp['medico'] )
    );
  }


}
