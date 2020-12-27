import { Component, OnInit } from '@angular/core';
import {ConnectorService} from '../../services/connector/connector.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  constructor(private connector: ConnectorService) { }

  ngOnInit(): void {
  }

}
