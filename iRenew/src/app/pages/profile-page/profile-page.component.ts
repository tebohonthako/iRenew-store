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


constructor (private http: HttpClient,private route: ActivatedRoute,private authService:AuthService) {
  this.UserId =0;
}
  UserMail=this.authService.getLoggedInUserEmail();
 

ngOnInit(){

   this.route.params.subscribe(params => {
     this.UserId = + params['id'];
   });

  this.http.get('assets/users.json').subscribe((res: any) => {
      this.User = res[Object.keys(res)[0]].find((e:any)=> e.id == this.UserId);
      console.log(this.User);}
      
    );
}





}

