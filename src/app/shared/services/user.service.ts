import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url)
  }
}
