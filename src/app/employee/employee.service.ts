import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/v1/employee');
  }


  addEmployee(employee: Employee) {

    this.http.post<string>('http://localhost:8080/v1/employee', employee).subscribe(response => {
        console.log(response);
      }
    );
  }


}
