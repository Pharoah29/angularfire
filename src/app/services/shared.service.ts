import { Injectable } from '@angular/core';
import { SignInUser } from '../models/user';

@Injectable()
export class SharedService {

  public data: any;

  currentUser: SignInUser;

  constructor() { }

}
