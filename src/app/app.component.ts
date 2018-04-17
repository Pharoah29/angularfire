import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { RepoService } from './services/repo.service';
import { SharedService } from './services/shared.service';
import { Repo } from './models/repo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  repoItems: Repo[];

  constructor(private repoService: RepoService, private route: ActivatedRoute,private router: Router, private shared: SharedService){

  }

  searchText = '';

  Search(){
    debugger;
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

}

