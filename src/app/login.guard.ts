import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './services/shared.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private shared: SharedService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let user = this.shared.currentUser;

    if (!user) {
debugger;
      this.router.navigate(['login']);
    }

    return (this.shared.currentUser != null);
  }
}
