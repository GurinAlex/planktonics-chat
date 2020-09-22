import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export interface User {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class LoginService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token');
  }

  login(user: User): Observable<any> {
   return this.http.post(
       `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEsAg37rIog2R9Wt3v8cLeCza4BUTs_Qw`,
       user)
     .pipe(
       tap(this.setToken),
       catchError(this.handleError.bind(this))
     );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse): any {
    const {message} = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такого email нет');
        break;

    }
    return throwError(error);
  }

  private setToken(response): void {
    if (response) {
      localStorage.setItem('token', response.idToken);
      localStorage.setItem('username', response.email.split('@')[0]);
    } else {
      localStorage.clear();
    }
  }
}
