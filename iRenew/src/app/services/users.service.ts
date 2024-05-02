import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interface/users.model';
@Injectable({
  providedIn: 'root'
})


// <!-- Creating a service to fetch the user data from the JSON file using HttpClient-->
export class UsersService {
  private apiURL = 'assets/users.json';

  constructor(private http: HttpClient) { }

  registerUser(userDetails: Users){
    return this.http.post('${this.apiUrl}/users', userDetails)
  }

  
  
}

