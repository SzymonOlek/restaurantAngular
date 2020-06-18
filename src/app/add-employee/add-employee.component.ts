import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

newEmployee: Employee = new Employee();
  constructor(private serviceEmployee: EmployeeService) { }

  ngOnInit(): void {
  }

  add() {
    console.log(this.newEmployee);
    this.serviceEmployee.addEmployee(this.newEmployee);
    this.newEmployee =  new Employee();
  }

  reset() {
    this.newEmployee = new Employee();
  }


}
