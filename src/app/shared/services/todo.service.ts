import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url ='https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient:HttpClient) { }

  getTODOS(){
    return this.httpClient.get<Todo[]>(this.url)
  }
}
