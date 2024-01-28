import { Component } from '@angular/core';

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
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You may check for existing token and navigate here
  }

  handleFormSubmit(): void {
    // You may want to add additional form validation here
    this.http
      .post<any>(`${yourServerURL}/api/loginUser`, this.loginForm.value)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Login Successful',
            icon: 'success',
            timer: 1000,
          }).then(() => {
            this.router.navigate(['/']);
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
