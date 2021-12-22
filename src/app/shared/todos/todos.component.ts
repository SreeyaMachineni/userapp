import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service'
import { Observable } from 'rxjs';
import {Todo} from '../models/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Observable<Todo[]>
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.todos = this.todoService.getTODOS()
    console.log(this.todos,'p')
  }

}
