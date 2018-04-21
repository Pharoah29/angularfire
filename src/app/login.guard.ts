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
    
    let success: boolean = true;

    let user = this.shared.currentUser;

    this.firebaseAuth.authState.subscribe(data => {
 
        if(data && data.uid) {

          return true; 
        }

        else{
          this.router.navigate(['login']);

          return false;
        }
    });
      
  
    return (success);
  }
}
