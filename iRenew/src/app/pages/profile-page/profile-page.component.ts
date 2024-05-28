import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {
  User: any;
  UserId: number;
  userApi="http://localhost:8080/irenew/users/";


constructor (private http: HttpClient,private route: ActivatedRoute,private authService:AuthService) {
  this.UserId =0;
}
  UserMail="";
  nameOfUser="";
 

ngOnInit(){

   this.route.params.subscribe(params => {
     this.UserId = + params['id'];
   });

  this.http.get(`${this.userApi}${this.UserId}`).subscribe((res: any) => {
    this.UserMail=res.email;
    this.nameOfUser=res.name;
   }
      
    );
}





}

