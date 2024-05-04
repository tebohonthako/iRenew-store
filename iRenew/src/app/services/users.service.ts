import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interface/users.model';

@Injectable({
  providedIn: 'root'
})


// <!-- Creating a service to fetch the user data from the JSON file using HttpClient-->
export class UsersService {
  private apiURL = './users.json';
  fs: any;

  constructor(private http: HttpClient) { }

  
   get Users(): Observable <Users> {
    return this.http. get<Users>(this.apiURL);
  }
  returnuserbyid(id: any) {
    const noteDocRef = doc(this.fs, `users/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<any>;
}
}


function docData(noteDocRef: any, arg1: { idField: string; }): Observable<any> {
  throw new Error('Function not implemented.');
}

function doc(fs: any, arg1: string) {
  throw new Error('Function not implemented.');
}

