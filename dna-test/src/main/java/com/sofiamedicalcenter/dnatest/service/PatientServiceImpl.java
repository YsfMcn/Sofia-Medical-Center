package com.sofiamedicalcenter.dnatest.service;

import com.sofiamedicalcenter.dnatest.exceptions.ResourceNotFoundException;
import com.sofiamedicalcenter.dnatest.model.Patient;
import com.sofiamedicalcenter.dnatest.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

  private final PatientRepository patientRepository;

  @Autowired
  public PatientServiceImpl(PatientRepository patientRepository) {
    this.patientRepository = patientRepository;
  }

  @Override
  public List<Patient> getAllPatients() {
    return patientRepository.findAll();
  }

  @Override
  public Patient createPatient(Patient patient) {
    return patientRepository.save(patient);
  }

  @Override
  public Patient findById(Long id) {
    return patientRepository
        .findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
  }
}
