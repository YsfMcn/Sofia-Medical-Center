package com.sofiamedicalcenter.dnatest.repository;

import com.sofiamedicalcenter.dnatest.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {}
