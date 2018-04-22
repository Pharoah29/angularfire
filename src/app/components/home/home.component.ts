import { Component, OnInit } from '@angular/core';
import { Repo } from '../../models/repo';
import { RepoService } from '../../services/repo.service';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent, NavigationStart, NavigationCancel } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;

  navigationSubscription: Subscription;

  ngOnInit(): void {
       
  }

  repoItems: Repo[];

  constructor(private repoService: RepoService, 
              private route: ActivatedRoute,
              private router: Router, 
              private shared: SharedService,
              private authService: AuthService){

  }

  searchText = '';

  Search(){
  
    if(!this.searchText) return;

    this.shared.data = null;

     let res = this.repoService.getList(this.searchText).subscribe((data: any) => {

      this.repoItems = data.items.map(i => {

            return {
                    name: i.name,
                    description:i.description,
                    avatarUrl: i.owner.avatar_url 
            };
      }); 

      this.shared.data = this.repoItems;

      this.router.navigate(['gallery'],{ skipLocationChange: true });
      
     });

  }

  logout(){

    this.authService.logout();
  }

  checkRouteEvents( onStart: Function, onEnd: Function ){

    this.navigationSubscription = this.router.events.subscribe((e: RouterEvent) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationStart) {;
        
        onStart();
      }

      if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationCancel) {

        onEnd();

      }      
    });

  }


}
