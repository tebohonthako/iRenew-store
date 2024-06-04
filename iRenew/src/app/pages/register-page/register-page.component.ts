import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  
  public Register!: FormGroup;
  api = "http://localhost:8080/api/v1/auth/register"; // Subject to change

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  validatePassword(password: string): boolean {
    const minLength = 8;
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
      return false;
    }

    if (!specialChars.test(password)) {
      return false;
    }

    return true;
  }

  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  ngOnInit(): void {
    this.Register = this.formbuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordsMatch }
    );
  }

  register() {
    if (this.Register.invalid) {
      return;
    }

    const userData = {
      name: this.Register.value.name,
      password: this.Register.value.password,
      email: this.Register.value.email
    };

    this.http.post<any>(this.api, userData).subscribe(
      (resp) => {
        alert('Sign up successful');
        this.authService.login(resp.token);
        const userId = this.authService.getUserIdFromToken(resp.token);
        this.router.navigate([`/profile/${userId}`]);
        this.Register.reset();
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }
}
