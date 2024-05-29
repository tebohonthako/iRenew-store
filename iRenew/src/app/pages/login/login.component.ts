import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() public isLoggedIn: boolean = true; 

  public loginForm!: FormGroup
  private nameUser='';
  private email='';
  private password="";
  private userId:any;
  private statusCode!:number|undefined;
  sCode:any|undefined;


  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router,private authService: AuthService) { }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })};
  private apiUrl="http://localhost:8080/api/v1/auth/login";
  
    login() {
      this.password=this.loginForm.value.password;

       this.http.post<any>(this.apiUrl, {"email":this.loginForm.value.email,"password": this.password },{ observe: 'response' }).subscribe(
        (response: HttpResponse<any>) => {
          // Handle successful login
          const result=response.body;
          this.statusCode=response.status;
        
         
          this.authService.login(result.token);
          this.userId= this.authService.getUserIdFromToken(result.token);
        
          this.router.navigate(["/profile/"+this.userId])
          this.loginForm.reset();
         
         
          
        },
        (error) => {
          
          // Handle login error
          this.statusCode=error.status;
          this.setCode(error.status);
         this.authService.setCode(error.status);
         
        
        
        }
      );
       
    
    }
   
setCode(code:any){
  this.sCode=code;
}
  }

// login()
//     {
      
//       this.http.post<any>("http://localhost:8080/api/v1/auth/login").subscribe(res=>{
//         const user = res.find((details:any)=>
//         {this.nameUser=details.name;
//           return details.email === this.loginForm.value.email && details.password === this.loginForm.value.password;
//         });
//         console.log(this.loginForm.value.email);
//         //const username = localStorage.setItem("user", this.loginForm.value.email);
        

      
//         if(user)
//         {
//           alert('Successfully Logged in');
//           this.authService.login(this.loginForm.value.email,this.nameUser);
//           this.isLoggedIn =true; // remove
//           this.loginForm.reset();
//           this.router.navigate(["/profile/"+user.id])
//           this.loginForm.reset();
//         }
//         else
//         {
//           alert("User not found");
//         }
//       },err=>
//       {
//         alert("Something went wrong");
//       })
//     }
    //  getLoginuser(){
    //   return this.getLoginuser;
    //   console.log(this.getLoginuser);
    // }
    
