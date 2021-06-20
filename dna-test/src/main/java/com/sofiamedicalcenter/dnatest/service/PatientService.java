package com.sofiamedicalcenter.dnatest.service;

import com.sofiamedicalcenter.dnatest.model.Patient;

import java.util.List;

public interface PatientService {
  List<Patient> getAllPatients();
  Patient createPatient(Patient patient);
  Patient findById(Long id);
}
