package com.sofiamedicalcenter.dnatest.service;

public interface DnaTestService {
  /**
   * Calculates the likelihood of human to have genetic disorder based on the DNA.
   *
   * @param dna – human dna to be checked
   * @return a number between 0 and 1 with the probability for disorder
   */
  double getGeneticDisorderProbability(String dna);
}
