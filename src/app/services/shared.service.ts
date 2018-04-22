import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable()
export class SharedService {

  public data: any;

  currentUser: User;

  constructor() { }

}
