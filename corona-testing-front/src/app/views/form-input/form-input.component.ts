import { Component, OnInit } from '@angular/core';
import {ConnectorService} from '../../services/connector/connector.service';
import {Patient} from "../../models/Patient";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  patient: Patient;

  constructor(private connector: ConnectorService) { }

  ngOnInit(): void {
  }


  createPatient() {

  }
}
