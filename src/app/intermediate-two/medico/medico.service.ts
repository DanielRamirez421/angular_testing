import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

constructor( private httpClient: HttpClient ) { }

  getMedicals() {
    return this.httpClient.get<string[]>('...');
  }

}
