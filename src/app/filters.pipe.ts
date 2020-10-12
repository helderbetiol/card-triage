import {Pipe, PipeTransform} from '@angular/core';
import {Patient} from './patient';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(allPatients: Patient[], arrhythmiaFilters: string[], nameFilter: string): Patient[] {
    let filteredPatients = this.filterByName(allPatients, nameFilter);
    filteredPatients = this.filterByArrhythmia(filteredPatients, arrhythmiaFilters);
    return filteredPatients;
  }

  // get all patients with at least one of the arrhythmias selected
  filterByArrhythmia(allPatients: Patient[], arrhythmiaFilters: string[]): Patient[] {
    if (arrhythmiaFilters.length <= 0) {
      return allPatients;
    }
    const filteredPatients = [];
    allPatients.forEach(patient => { // check all patients
      for (const arrhythmia of patient.arrhythmias) {
        // check all patients arrhythmias
        if (arrhythmiaFilters.includes(arrhythmia)) {
          // show it if one of them among the selected
          filteredPatients.push(patient);
          break;
        }
      }
    });
    return filteredPatients;
  }

  // get all patients whose names include the searched text
  filterByName(allPatients: Patient[], nameFilter: string): Patient[] {
    if (nameFilter.length <= 0) {
      return allPatients;
    }
    return allPatients.filter(patient => patient.patient_name.toLowerCase().includes(nameFilter.toLowerCase()));
  }
}
