import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../_common/_service/authentication.service';
import { AlertService } from '../_common/_service/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = signal(true);

  isLoading = false;

  loading = false;
  submitted = false;
  hideRequiredControl: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isLoading = true; // Show spinner
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
          this.isLoading = false; // Hide spinner on success
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
          this.isLoading = false; // Hide spinner on error
          this._snackBar.open('Login nicht erfolreich', 'Schließen', { duration: 5000 });
        }
      });
  }

  login() {
    this.router.navigate(['/dashboard']);
  }
  togglePassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

}
