import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees')
  }
  deleteEmployee(id: any) {
    return this.http.delete(`http://localhost:3000/employees/${id}`)
  }
  addEmployee(empObj: any) {
    return this.http.post(`http://localhost:3000/employees`, empObj);
  }
}
