import { Pipe, PipeTransform } from '@angular/core';
import {Status} from './status.enum';
import {Patient} from './patient';

@Pipe({
  name: 'patientStatusNotDone', pure: false
})
export class PatientStatusNotDonePipe implements PipeTransform {

  transform(allPatients: Patient[]): Patient[] {
    // get only patients PENDING or REJECTED
    return allPatients.filter(patient => patient.status !== Status.Done);
  }

}

@Pipe({
  name: 'patientStatusDone', pure: false
})
export class PatientStatusDonePipe implements PipeTransform {

  transform(allPatients: Patient[]): Patient[] {
    // get all patients DONE
    return allPatients.filter(patient => patient.status === Status.Done);
  }

}
