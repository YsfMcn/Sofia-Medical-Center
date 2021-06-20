package com.sofiamedicalcenter.dnatest.controller;

import com.sofiamedicalcenter.dnatest.model.Patient;
import com.sofiamedicalcenter.dnatest.service.DnaTestService;
import com.sofiamedicalcenter.dnatest.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/dnatest/v1")
public class PatientController {

  private final PatientService patientService;
  private final DnaTestService dnaTestService;

  @Autowired
  public PatientController(PatientService patientService, DnaTestService dnaTestService) {
    this.patientService = patientService;
    this.dnaTestService = dnaTestService;
  }

  @GetMapping("/patients")
  public ResponseEntity<List<Patient>> getAllPatients() {
    return ok(patientService.getAllPatients());
  }

  @PostMapping("/patients")
  public ResponseEntity<Patient> createPatient(@RequestBody @NonNull Patient patient) {
    patient.setTestResult(dnaTestService.getGeneticDisorderProbability(patient.getDna()));
    patient.setDate(LocalDate.now());
    return ok(patientService.createPatient(patient));
  }

  @GetMapping("/patients/{id}")
  public ResponseEntity<Patient> getPatient(@PathVariable Long id) {
    return ok(patientService.findById(id));
  }
}
