import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
 
  constructor(private firebaseAuth: AngularFireAuth) { }

  login(email: string, password: string) : Promise<any> {
    
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

}
