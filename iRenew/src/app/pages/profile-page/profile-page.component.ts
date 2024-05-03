import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

//public Profile!: FormGroup;

api = 'http://localhost:3000/users'


constructor (
 // private formGroup: FormGroup,
  private http: HttpClient,
  private router: Router
  ) {}

}

