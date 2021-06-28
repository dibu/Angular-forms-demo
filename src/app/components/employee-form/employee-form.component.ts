import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Dept} from 'src/app/model/dept.model';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl('')
  }); 
  
  constructor() { }

  ngOnInit(): void {
      
  }

  onSubmit() {
   
  }

}
