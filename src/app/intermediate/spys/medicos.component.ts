import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})

export class MedicosComponent implements OnInit {


  public medicals: any[] = [];
  public errorMsg!: string;

  constructor( public _medicoService: MedicosService ) { }

  ngOnInit() {
    this._medicoService.getMedicals()
          .subscribe( (medical: any) => this.medicals = medical );
  }

  addMedical() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.addMedical(medico)
          .subscribe(
            (medicalDb: any) => this.medicals.push(medicalDb),
            (err: any) => this.errorMsg = err
          );
  }

  deleteMedical(id: string) {
    const confirmation = confirm('Are u sure u want to delete this medical?');

    if ( confirmation ) {
      this._medicoService.deleteMedical( id );
    }

  }

}
