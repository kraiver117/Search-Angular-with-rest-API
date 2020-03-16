import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterUserService } from '../shared/services/filter-user.service'
import {User} from '../shared/models/User';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  
  usersArray: any[];
  searchText: '';

  constructor(private _filter: FilterUserService) {
  }

  private _user: User;

  ngOnInit() {
   this.getUserList();
    this._user = new User();
  }

  getUserList() {
    this._filter.getUsers()
    .subscribe((response) => (this.usersArray = response.data));

  }


}
