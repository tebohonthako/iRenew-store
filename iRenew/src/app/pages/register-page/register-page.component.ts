import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interface/users.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})

export class RegisterPageComponent implements OnInit{
  
  // formData = {
  // name: '',
  // email: '',
  // password: ''
  // };
  public Register!: FormGroup;
  private generateNewUserId(): string {
    return uuidv4();
  }
  api = "http://localhost:8080/api/v1/auth/register"///Subject to change

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,private authService: AuthService
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
  ngOnInit(): void 
  {
    this.Register = this.formbuilder.group({
      name: [ '',Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],

    });
  }

  register() 
  {
    let UserId :any;
    const userData={
    'name':`${this.Register.value.name}`,
    'password':`${this.Register.value.password}`,
    'email':`${this.Register.value.email}`
    }
    this.http.post<any>(this.api, userData).subscribe((resp) => {
      console.log(this.Register);
        alert('sign up successful');
        this.authService.login(resp.token);
        UserId=this.authService.getUserIdFromToken(resp.token);
        
        this.router.navigate(["/profile/"+UserId]); //testing, routing to profile after registering
        //this.router.navigate(['/login']);
        this.Register.reset();
      },
      (error) => {
        alert('something went wrong');
      }
    )
  }
}
