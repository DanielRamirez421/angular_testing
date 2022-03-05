import { MedicoService } from './medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {

  public medicals: string[] = [];

  constructor( public medicoService: MedicoService ) { }

  ngOnInit(): void {
    this.getMedicals();
  }

  sayHiMedical(name: string){
    return `Hi ${ name }`;
  }

  getMedicals() {
    this.medicoService.getMedicals().subscribe( medicals => {
      this.medicals = medicals;
    });
  }

}
