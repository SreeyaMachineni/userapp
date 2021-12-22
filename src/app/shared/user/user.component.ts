import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user:User

  @Output('getTodosOfUser')
  getTODOs = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }
  getTodos(user){
    this.getTODOs.emit(user)
  }

}
