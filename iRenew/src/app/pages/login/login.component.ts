import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() public isLoggedIn: boolean = true; 

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router,private authService: AuthService) { }

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
        console.log(this.loginForm.value.email);
        const username = localStorage.setItem("user", this.loginForm.value.email);
        
        if(user)
        {
          alert('Successfully Logged in');
       
          this.authService.logout();
          this.authService.login(this.loginForm.value.email);
          this.router.navigate(["/profile/"+user.id])
          this.loginForm.reset();
        }
        else
        {
          alert("User not found");
        }
      },err=>
      {
        alert("Something went wrong");
      })
    }
    getLoginuser(){
      return this.getLoginuser;
      console.log(this.getLoginuser);
    }
    
  }