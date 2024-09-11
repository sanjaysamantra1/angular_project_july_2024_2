import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../state_management/actions/employee.actions';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  empObj: Employee;

  constructor(private store: Store) {
    this.empObj = {
      id: '',
      firstName: '',
      lastName: '',
      sal: 0,
      email: ''
    }
  }
  ngOnInit() {
  }
  submitMyForm(formData: any) {
    console.log(formData);
    this.store.dispatch(addEmployee({ employee: formData }));
  }
}
