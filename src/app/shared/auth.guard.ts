import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.login.isAuthenticated()) {
      return true;
    } else  {
      this.login.logout();
      this.router.navigate(['login']);
    }
  }

}
