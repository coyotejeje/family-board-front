import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';
const endPoint = environment.apiUrl;
const urlUser = endPoint + "users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User|null> {
    return this.http.get<any>(urlUser, {});
  }

  userCreateAFamily(user:User): Observable<User|null>{
    return this.http.post<User>(urlUser+"/createMyFamily?userId=2&familyTitle=test", user);
  }
}
