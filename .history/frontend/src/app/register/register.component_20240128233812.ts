import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';
const yourServerURL = 'http://localhost:8080';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      DOB: ['01-01-2000', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You may check for existing token and navigate here
  }

  handleFormSubmit(): void {
    const dobValue = this.registerForm.get('DOB')?.value;

    if (dobValue !== undefined) {
      const dobDate = new Date(dobValue);

      // Format the date as dd-mm-yyyy
      const day = dobDate.getDate().toString().padStart(2, '0');
      const month = (dobDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
      const year = dobDate.getFullYear();

      const formattedDOB = `${day}-${month}-${year}`;

      this.http
        .post<any>(`${yourServerURL}/api/registerUser`, {
          ...this.registerForm.value,
          DOB: formattedDOB,
        })
        .subscribe(
          (data) => {
            Swal.fire({
              title: 'Registration Successful',
              icon: 'success',
              timer: 1000,
            }).then(() => {
              this.router.navigate(['/loginUser']);
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
    } else {
      console.error('DOB control is null or undefined');
    }
  }
}
