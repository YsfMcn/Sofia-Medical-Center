import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  pageTitle = 'Patient List';
  patients: Patient[] = [];

  filters = {
    keyword: ''
  }

  constructor(private _patientService: PatientService, private _router: Router) { }


  ngOnInit(): void {
    this._patientService.getPatients().subscribe(
      data => this.patients = this.filterPatients(data)
    )
  }

  listPatients() {
    this._patientService.getPatients().subscribe(
      data => this.patients = this.filterPatients(data)
    )
  }

  filterPatients(patients: Patient[]) {
    return patients.filter((p) => {
      return p.name.toLocaleLowerCase().includes(this.filters.keyword.toLocaleLowerCase()) || p.phone.includes(this.filters.keyword)
    })
  }

  patientDetails(id: number){
    this._router.navigate(['patient-details', id]);
  }

  reduTest(id: number) {
    this._router.navigate(['editpatient', id]);
  }
}
