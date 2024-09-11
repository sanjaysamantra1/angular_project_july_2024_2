import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { deleteEmployee } from '../../state_management/actions/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees$: Observable<Employee[]> = this.store.select(state => state.employees); // Selector

  constructor(private store: Store<{ employees: Employee[] }>) {
  }
  ngOnInit() {
    this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
  }
  deleteEmp(id: string) {
    const flag = confirm('Are you sure, You want to delete this record?')
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
