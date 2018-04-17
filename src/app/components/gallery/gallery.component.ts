

import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Subscribable, Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { RepoService } from '../../services/repo.service';
import { Repo } from '../../models/repo';

@Component({
  selector: 'app-repo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
  
  @Input() items: any[];

  navigationSubscription: Subscription;

  products: Observable<any>;
  
  constructor(private route: ActivatedRoute,private router: Router , private repoService: RepoService, private shared: SharedService) { }
  
  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'count') {
          console.log('Previous:', changes[property].previousValue);
          console.log('Current:', changes[property].currentValue);
          console.log('firstChange:', changes[property].firstChange);
        } 
    }
  }

  bookmark(item: Repo){

      this.repoService.toStorage(item);
  }
  
  ngOnInit() {

    this.products = this.repoService.getProducts();

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {debugger;
        this.items = this.shared.data;
      }
    });
    
  }
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  debugger;
       this.navigationSubscription.unsubscribe();
    }
  }  

 
}
