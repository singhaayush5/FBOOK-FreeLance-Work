// app.routes.ts

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registerUser', component: RegisterComponent },
  { path: 'loginUser', component: LoginComponent },
  { path: 'forgotUser', component: LoginComponent },
  //   { path: '', redirectTo: '', pathMatch: 'full' },
];
