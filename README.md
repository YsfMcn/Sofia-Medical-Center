# Angular 10, Spring boot and PostgreSQL Web Applicaton - DNA Test

## Requirements

 Java: openjdk 11
 Angular 10
 PostgreSQL
 Node
 Npm

## Build the project

    mvn clean install

## Package the project in one JAR

    mvn clean package

## Run project from command line
	
	java -jar target/dna-test-0.0.1-SNAPSHOT.jar
	
## Explore Rest API

	GET /dnatest/v1/patients
	POST /dnatest/v1/patients
	GET /dnatest/v1/patients/{patientId} 
	
## Install node modules for angular application (expense-tracker-frontend)

	npm install
	
## Run the angular application

	ng serve
	