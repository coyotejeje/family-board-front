import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const endPoint = environment.apiUrl;
const urlUser = endPoint + "users";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  getUsers():
    Observable<any> {
    return this.http.get<any>(urlUser, {
  });
  }
}
