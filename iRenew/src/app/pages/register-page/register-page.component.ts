import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interface/users.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})

export class RegisterPageComponent {
  // formData = {
  // name: '',
  // email: '',
  // password: ''
  // };
  public Register!: FormGroup;

  api = 'http://localhost:3000/users'

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void 
  {
    this.Register = this.formbuilder.group({
      name: new FormControl('', Validators.required),

      email: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),
    });
  }

  register() 
  {
    this.http.post<any>(this.api, this.Register.value).subscribe((resp) => {
      console.log(this.Register);
        alert('sign up successful');

        //the navigator method accepts an array of route as an argument

        this.Register.reset();

        this.router.navigate(['/landing']);
      },
      (error) => {
        alert('something went wrong');
      }
    )
  }
}
