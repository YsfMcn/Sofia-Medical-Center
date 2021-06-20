import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private getUrl: string = "http://localhost:8080/dnatest/v1/patients";

  constructor(private _httpClient: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this._httpClient.get<Patient[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  savePatient(patient: Patient): Observable<Patient>{
    return this._httpClient.post<Patient>(this.getUrl, patient);
  }

  getPatient(id: number): Observable<Patient> {
    return this._httpClient.get<Patient>(`${this.getUrl}/${id}`).pipe(
      map(Response => Response)
    )
  }
}
