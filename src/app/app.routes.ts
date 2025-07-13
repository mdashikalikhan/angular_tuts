import { Client } from './components/client/client';
import { Employee } from './components/employee/employee';
import { Master } from './components/master/master';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
  },
  {
    path: 'master',
    component: Master
  },
  {
    path: 'employee',
    component: Employee
  },
  {
    path: 'client',
    component: Client
  }
];
