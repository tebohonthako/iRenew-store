import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() public isLoggedIn: boolean = true; 

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })};


login()
    {
      this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
        const user = res.find((details:any)=>
        {
          return details.email === this.loginForm.value.email && details.password === this.loginForm.value.password;
        });
        console.log(this.loginForm);
        
        if(user)
        {
          alert('Successfully Logged in');
          this.isLoggedIn =true; 
          this.loginForm.reset();
          this.router.navigate(["/profile/"+user.id])
        }
        else
        {
          alert("User not found")
        }
      },err=>
      {
        alert("Something went wrong");
      })
    }}