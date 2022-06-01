import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Family } from 'src/app/shared/models/family';
import { environment } from 'src/environments/environment';
const endPoint = environment.apiUrl;
const urlFamily = endPoint + 'families';


@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http: HttpClient) {}

  createAFamily(family: Family): Observable<Family|null> {
    return this.http.post<Family>(urlFamily, family)
  }

  getAllFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>(urlFamily, {})
  }

}
