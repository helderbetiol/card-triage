import { Component, OnInit } from '@angular/core';
import {PatientsService} from '../patients.service';
import {Patient} from '../patient';
import {Status} from '../status.enum';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.css']
})
export class CardListingComponent implements OnInit {
  patients: Array<Patient> = [];
  arrhythmiaFilters: Array<string> = [];
  nameFilter = '';
  aux = new Date('2019-02-21T00:09:32');

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    const patients = this.patientsService.getPatientsData();
    patients.subscribe(data => {
      this.patients = data;
    });
  }

  changeStatus(patient: Patient): void {
    if (patient.status === Status.Done) {
      patient.status = Status.Rejected;
    } else {
      patient.status = Status.Done;
    }
  }

  onNotifyFilter(arrhythmia: string): void {
    if (!this.arrhythmiaFilters.includes(arrhythmia)) {
      this.arrhythmiaFilters.push(arrhythmia); // add to filters
    }
  }

  removeArrhythmiaFilter(arrhythmia: string): void {
    // remove from filters
    this.arrhythmiaFilters.splice(this.arrhythmiaFilters.indexOf(arrhythmia), 1);
  }

  onNotifySearch(searchText: string): void {
    // update name filter with input text
    this.nameFilter = searchText;
  }
}
