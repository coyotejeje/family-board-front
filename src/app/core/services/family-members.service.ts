import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyMember } from 'src/app/shared/models/family-member';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';
const endPoint = environment.apiUrl;
const urlFamilyMembers = endPoint + 'family-members';

@Injectable({
  providedIn: 'root'
})
export class FamilyMembersService {

  constructor(private http: HttpClient) {}

  
  addMembersToFamily(familyMember: FamilyMember): Observable<FamilyMember> {
    return this.http.post<FamilyMember>(urlFamilyMembers, familyMember)
  }

  /*
  addMembersToFamily(user: User): Observable<User|null> {
    return this.http.post<User>(urlFamilyMembers, user)
  }
  */

  getAllMembers(): Observable<FamilyMember[]> {
    return this.http.get<FamilyMember[]>(urlFamilyMembers, {}) 
  }

}