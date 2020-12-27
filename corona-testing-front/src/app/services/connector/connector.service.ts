import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Patient} from "../../models/Patient";

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  public API = 'http://localhost:3000/';
  public readonly PATIENTS_ENDPOINT = 'patients/';

  constructor(public http: HttpClient) {}

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.API + this.PATIENTS_ENDPOINT + 'all');
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.API + this.PATIENTS_ENDPOINT + 'find/' + id);
  }

  submitForm(form: any): Observable<any> {
    return this.http.post(this.API + this.PATIENTS_ENDPOINT + 'submit', { form } , {})
  }
}
