import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients = [];

  getPatientsData(): Observable<Patient[]> {
    // get patients data from the server
    return this.http.get<Patient[]>('http://localhost:3000/cards');
  }
  constructor(private http: HttpClient) { }
}
