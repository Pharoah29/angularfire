import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './services/shared.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private shared: SharedService, private router: Router,private firebaseAuth: AngularFireAuth ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        debugger;
    let user = this.shared.currentUser;
      
    if (!user) {

      this.router.navigate(['login']);
    }

    return (this.shared.currentUser != null);
  }
}
