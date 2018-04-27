import { RepoService } from './../../services/repo.service';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../../models/repo.model';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmark: Repo[]
  
  constructor(private repoService: RepoService) { }

  ngOnInit() {

      this.bookmark = this.repoService.fromStorage();
    
  }


}
