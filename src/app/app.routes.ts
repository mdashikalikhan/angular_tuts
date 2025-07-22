import { ClientProject } from './components/client-project/client-project';
import { Client } from './components/client/client';
import { Employee } from './components/employee/employee';
import { LayoutComponent } from './components/layout-component/layout-component';
import { LoginComponent } from './components/login-component/login-component';
import { Master } from './components/master/master';
import { Routes } from '@angular/router';
import { authGuard } from './services/guards/auth-guard';
import { RxjsTester } from './components/rxjs-tester/rxjs-tester';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children:[
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
      },
      {
        path: 'client-project',
        component: ClientProject
      },
      {
        path: 'rxjs',
        component: RxjsTester
      }
    ]
  }

];
