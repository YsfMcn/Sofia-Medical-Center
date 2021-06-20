import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  pageTitle = 'Create Patient';
  patient: Patient = new Patient(); 

  constructor(private _patientService: PatientService, private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +(this._activatedRoute.snapshot.paramMap.get('id'))!;
      this._patientService.getPatient(id).subscribe(
        data => this.patient = data
      )
      this.pageTitle = 'Redu Test';
    }
  }

  savePatient() {
    this._patientService.savePatient(this.patient).subscribe(
      data => {
        console.log(data);  
        this.goToPatientList();
      }
    )
  }

  goToPatientList(){
    this._router.navigateByUrl('/patients'); 
  }

  onRunTest(){
    console.log(this.patient);
    this.savePatient();
  }
}
