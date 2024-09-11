import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './state_management/reducers/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { employeesReducer } from './state_management/reducers/employee.reducer';
import { EmployeeEffects } from './state_management/effects/employee.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ count: counterReducer, employees: employeesReducer }),
    provideEffects(EmployeeEffects)
  ]
};
