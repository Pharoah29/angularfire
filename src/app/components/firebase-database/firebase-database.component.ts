import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../../services/firebase-database.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-firebase-database',
  templateUrl: './firebase-database.component.html',
  styleUrls: ['./firebase-database.component.scss']
})
export class FirebaseDatabaseComponent implements OnInit {

  users: Observable<User[]>;
  
  constructor(private firebase: FirebaseDatabaseService) { }

  ngOnInit() {

     this.users = this.firebase.getUsers();
  }

}
