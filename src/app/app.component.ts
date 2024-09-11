import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterComponent,
    EmployeeListComponent,
    EmployeeAddComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_july_2024_2';

  add(a: number, b: number) {
    return a + b;
  }

  isEven(num: number) {
    if (num % 2 == 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }

  cars: string[] = ['tata', 'honda'];
  addNewCar(car: string) {
    this.cars.push(car);
  }
  deletecar(ind: number) {
    this.cars.splice(ind, 1)
  }

  isValidParentheses(str: string) {
    const stack: any = [];
    const pairs: any = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    for (let char of str) {
      if (pairs[char]) {
        stack.push(char);
      } else if (
        char === ")" ||
        char === "]" ||
        char === "}"
      ) {
        if (
          pairs[stack.pop()] !==
          char
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

}
