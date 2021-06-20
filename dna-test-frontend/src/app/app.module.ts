import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

const routers: Routes = [
  {path: 'patients', component: PatientListComponent},
  {path: 'createpatient', component: CreatePatientComponent},
  {path: 'editpatient/:id', component: CreatePatientComponent},
  {path: '', redirectTo: '/patients', pathMatch: 'full'},
  {path: 'patient-details/:id', component: PatientDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    CreatePatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
