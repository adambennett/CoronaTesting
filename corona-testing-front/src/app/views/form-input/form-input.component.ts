import { Component, OnInit } from '@angular/core';
import {ConnectorService} from '../../services/connector/connector.service';
import {Patient} from "../../models/Patient";
import {getCountries, getStates} from "country-state-picker";
import {Country} from "../../models/Country";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  patient: Patient = {
    address: "",
    appointment_time: "",
    birthday: new Date(),
    cell_number: "",
    city: "",
    county: "",
    email: "",
    ethnicity: "",
    fever: false,
    form_filled_date: new Date(),
    gender: "",
    id: null,
    insurance_group_id: "",
    insurance_patient_id: "",
    insured: false,
    name: "",
    persistent_cough: false,
    race: "",
    shortness_of_breath: false,
    social_security: "",
    state: "",
    sure_exposure: false,
    suspected_exposure: false,
    zipcode: ""
  };

  genders: string[] = ['Male', 'Female', 'Prefer not to say'];
  appointmentTimes: string[] = ['10:00 am', '11:00 am', '12:00 noon', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm'];
  countries: Country[];
  selectedCountry: Country;
  states: string[];

  constructor(private connector: ConnectorService) { }

  ngOnInit(): void {
    this.countries = getCountries();
    console.log('countries', this.countries);
    this.selectedCountry = this.countries.filter(country => country.code === 'us')[0];
    this.states = getStates(this.selectedCountry.code);
    console.log('states', this.states);
  }

  createPatient(patient: Patient) {
    console.log("going to send", patient);
    this.connector.submitForm(patient).subscribe(data => {
      console.log('got data back', data);
    }, error => {
      console.log("Error creating patient!", error);
    });
  }

  setCough(val: boolean): void {
    this.patient.persistent_cough = val;
  }

  setShortness(val: boolean): void {
    this.patient.shortness_of_breath = val;
  }
}
