import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import {User} from '../models/user'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.users = this.userService.getUsers()
  }
  getUserTodos(e){    
    this.router.navigate(['/shared/todos'])
  }

}
