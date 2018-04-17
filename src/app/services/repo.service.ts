import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Repo } from '../models/repo';


@Injectable()
export class RepoService {

  private EndPoint: string = "https://api.github.com/search/repositories?q="; 

  private bookmark: Repo[] = [];
  
  constructor( private http: HttpClient) { }

  getList(serachText: string) : Observable<any>
  {      return this.http.get(this.EndPoint + serachText);
      
  }

  getProducts() : Observable<any>
  {      return this.http.get("http://localhost:60666/api/products/");
      
  }



  toStorage(item: Repo){

    if(this.bookmark.indexOf(item) == -1) this.bookmark.push(item);
    debugger;
    sessionStorage.setItem("github.gallery.bookmarks",JSON.stringify(this.bookmark));
  }

  fromStorage<T>(){
    return JSON.parse(sessionStorage.getItem("github.gallery.bookmarks")) as T;
  }

}
