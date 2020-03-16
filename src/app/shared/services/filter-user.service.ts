import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {Constant} from '../classes/Constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterUserService {

  constructor(private _htpp: HttpClient) {
  }

  getUsers(): Observable <any> {
    return this._htpp.get(Constant.API + '/users?page=1');
  }

}
