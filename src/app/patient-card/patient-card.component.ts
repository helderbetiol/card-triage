import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../patient';
import {Status} from '../status.enum';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient;
  @Output() notifyFilter = new EventEmitter(); // notify arrhythmia selected as filter
  constructor() {}

  ngOnInit(): void {
  }

  public get status(): typeof Status { // get status available to html
    return Status;
  }

  changeStatus(patient: Patient): void { // change patient status, triggers change of columns
    if (patient.status === Status.Done) {
      patient.status = Status.Rejected;
    } else {
      patient.status = Status.Done;
    }
  }

  formatDate(stringDate: string): Date {
    return new Date(stringDate.slice(0, stringDate.indexOf('+'))); // remove +0000, incompatible with Date
  }
}
