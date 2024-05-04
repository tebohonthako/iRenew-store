

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {
  Users: any;


constructor (private http: HttpClient) {}
  

ngOnInit(){
  this.http.get('assets/users.json')
    .subscribe((res: any) => {
      console.log(res);
      this.Users = res}
    );
}


}

