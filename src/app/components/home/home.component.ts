import { Component, OnInit } from '@angular/core';
import { Repo } from '../../models/repo';
import { RepoService } from '../../services/repo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
   
  }
  repoItems: Repo[];

  constructor(private repoService: RepoService, 
              private route: ActivatedRoute,
              private router: Router, 
              private shared: SharedService){

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
