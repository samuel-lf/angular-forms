import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    birth: new Date(),
    age: 0,
    email: '',
    gender: '',
    street: '',
    state: '',
    city: '',
    phone1: '',
    phone2: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.client);
  }

}
