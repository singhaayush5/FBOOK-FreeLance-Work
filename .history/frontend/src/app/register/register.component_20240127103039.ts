import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      roll: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You may check for existing token and navigate here
  }

  handleFormSubmit(): void {
    if (
      this.signupForm.get('confirmPassword').value !==
      this.signupForm.get('password').value
    ) {
      Swal.fire({
        title: 'Confirm Password should be same as password',
        text: 'Password and confirm password have to be the same',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
      return;
    }

    // You may want to add additional form validation here

    this.http
      .post<any>(`${yourServerURL}/api/registerStudent`, this.signupForm.value)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Registration Successful',
            icon: 'success',
            timer: 1000,
          }).then(() => {
            this.router.navigate(['/loginstudent']);
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
