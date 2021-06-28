import { Component, OnInit, Input } from '@angular/core';
import {Dept} from 'src/app/model/dept.model';
import {EmpGroup } from 'src/app/model/emp-group.model';
import {Employee} from 'src/app/model/employee.model';
@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  constructor() { }
  depts : Array<Dept>;
  empgroups : Array<EmpGroup>;
  employeee : Employee = new Employee();
  ngOnInit(): void {
          this.depts = [
            new Dept(1,'Engineering'),
            new Dept(2,'Development'),
            new Dept(3,'Testing'),
            new Dept(4,'Back Office'),
            new Dept(5,'Marketing'),
        ];

        this.empgroups = [
            new EmpGroup(1,'Group1'),
            new EmpGroup(2,'Group2'),
            new EmpGroup(3,'Group3'),
            new EmpGroup(4,'Group4')
        ];
  }
  saveData() {
    console.log(JSON.stringify(this.employeee,null,2));
    alert(JSON.stringify(this.employeee,null,2));
  }
  onSelectionChange(empgr: EmpGroup){
    this.employeee.Group = empgr.groupId; 
  }
}
