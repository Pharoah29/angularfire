import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User  = {} as User;
  
  constructor(private authService : AuthService, private router: Router, private shared: SharedService) { }

  ngOnInit() {

  }

  login(){
   
    let logged = this.authService.login(this.user.email,this.user.password);
    
    logged.then(data => {
      console.log('Nice, it worked!');
    
      this.user.token = data.uid;
      this.shared.currentUser = this.user;
     
      this.router.navigate(['']);
     
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
     
    });

  }
}
