// app.routes.ts

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { EditUserComponent } from './edituser/edituser.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registerUser', component: RegisterComponent },
  { path: 'loginUser', component: LoginComponent },
  { path: 'forgotUser', component: ForgotpassComponent },
  { path: 'forgotUser/editUser', component: EditUserComponent },
  { path: 'dashboard' },
  //   { path: '', redirectTo: '', pathMatch: 'full' },
];
