import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore' 
import { User } from '../models/user';




@Injectable()
export class FirebaseDatabaseService {

  private collection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;
 
  constructor(private afs: AngularFirestore) {
   
   }

   getUsers() : Observable<User[]>
   {
      this.collection  =  this.afs.collection('users', ref => {
        
        return ref.where("id","<",10).orderBy("id","desc");
      
         
        });

      this.users = this.collection.valueChanges();
        
        return this.users;
   
    }

}
