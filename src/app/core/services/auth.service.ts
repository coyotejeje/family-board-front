import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../../shared/models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  readonly user$: Observable<User|null> = this.user.asObservable();
  private urlApi: string = "http://localhost:8080/api/login"

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User|null> {
    // 1. A faire : Faire un appel au backend.
    // 2. A faire : Mettre à jour l’état en fonction de la réponse du backend.
    // 3. A faire : Retournez la réponse du backend sous la forme d’un Observable,
    //    pour le composant qui déclenche cette action.

    return of(new User());
    // Simple code pour calmer votre IDE.
    // Retourne un Observable contenant un utilisateur,
    // grâce à l’opérateur of de RxJS.
  }

  register(firstName: string, email: string, password: string): Observable<User|null> {
    return of(new User());
  }

  logout(): Observable<null> {
    return of(null);
  }
}
