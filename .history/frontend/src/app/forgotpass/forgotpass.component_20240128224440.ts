import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

const yourServerURL = 'http://localhost:8080';
@Component({
  selector: 'app-forgotpass',
  standalone: true,
  imports: [],
  templateUrl: './forgotpass.component.html',
  styleUrl: './forgotpass.component.css',
})
export class ForgotpassComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      DOB: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You may check for existing token and navigate here
  }

  handleFormSubmit(): void {
    // You may want to add additional form validation here
    this.http
      .post<any>(`${yourServerURL}/api/forgotUser`, this.loginForm.value)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Login Successful',
            icon: 'success',
            timer: 1000,
          }).then(() => {
            this.router.navigate(['/forgotUser/EditUser']);
          });
        },
        (error) => {
          Swal.fire({
            title: 'Bad Credentials',
            text: 'Please enter valid details',
            icon: 'error',
            confirmButtonText: 'Retry',
          });
        }
      );
  }
}
