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
  api = 'http://localhost:8080/users'

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,private authService: AuthService
  ) {}
    passwordValidator(){
      const regex = /[!@#$%^&*(),.?":{}|<>]/;
      return regex.test(this.Register.get('password')?.value);
    }
    passwordValidator2(){
      return this.Register.get('password')?.errors;
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
    const newUserId = this.generateNewUserId();
    const userData={'id':newUserId,
    'name':`${this.Register.value.name}`,
    'password':`${this.Register.value.password}`,
    'email':`${this.Register.value.email}`
    }
    this.http.post<any>(this.api, userData).subscribe((resp) => {
      console.log(this.Register);
        alert('sign up successful');

        //the navigator method accepts an array of route as an argument

      
        console.log("testing email in register page",this.Register.value.email,)
        this.authService.login(this.Register.value.email);
        this.router.navigate(["/profile/"+newUserId]); //testing, routing to profile after registering
        //this.router.navigate(['/login']);
        this.Register.reset();
      },
      (error) => {
        alert('something went wrong');
      }
    )
  }
}
