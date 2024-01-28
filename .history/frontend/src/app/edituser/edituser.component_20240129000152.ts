import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {} from '@angular/forms';
@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css',
})
export class ForgotpassComponent {
  forgotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      DOB: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You may check for existing token and navigate here
  }

  handleFormSubmit(): void {
    const dobValue = this.forgotForm.get('DOB')?.value;

    if (dobValue !== undefined) {
      const dobDate = new Date(dobValue);

      // Format the date as dd-mm-yyyy
      const day = dobDate.getDate().toString().padStart(2, '0');
      const month = (dobDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
      const year = dobDate.getFullYear();

      const formattedDOB = `${day}-${month}-${year}`;

      this.http
        .post<any>(`${yourServerURL}/api/forgotUser`, {
          ...this.forgotForm.value,
          DOB: formattedDOB,
        })
        .subscribe(
          (data) => {
            Swal.fire({
              title: 'User Found',
              icon: 'success',
              timer: 1000,
            }).then(() => {
              this.router.navigate(['/']);
            });
          },
          (error) => {
            console.log(error);
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
