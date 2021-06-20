package com.sofiamedicalcenter.dnatest.service;

import org.springframework.stereotype.Service;

@Service
public class DnaTestServiceImpl implements DnaTestService {
  @Override
  public double getGeneticDisorderProbability(String dna) {

    String reverseDNA = new StringBuilder(dna).reverse().toString();
    String longestMatch = "";
    int index = 1;

    while (dna.length() >= index && reverseDNA.contains(dna.substring(0, index))){
      index++;
    }
    index--;
    System.out.println(dna.substring(0, index));

    return index > 1 ? Math.round((dna.substring(0, index).length() * 1.0)  / dna.length() * 10.0) / 10.0 : 0;
  }
}
