import { TestBed,ComponentFixture,tick, fakeAsync,async } from '@angular/core/testing';
import {UsersComponent} from '../users/users.component'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from '../services/user.service';
import {Component,NO_ERRORS_SCHEMA} from "@angular/core"
import { Router } from '@angular/router';
import {UserComponent} from '../user/user.component'
import {of} from 'rxjs'
import { By } from '@angular/platform-browser';


describe('User Component', () => {
  let component = UsersComponent
  let USERS;
  let mockUserService;
  let mockRouter;
  let fixture;

  


  beforeEach(()=>{

    USERS = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    ];


    mockUserService = jasmine.createSpyObj(['getUsers'])
    mockRouter = {
      navigate:jasmine.createSpy('navigate')
    }
    TestBed.configureTestingModule({
      declarations:[UsersComponent,UserComponent],
      providers:[
        {provide:Router,useValue:mockRouter},
        {provide:UserService,useValue:mockUserService}
      ],
      schemas:[NO_ERRORS_SCHEMA] 
    }).compileComponents()
    fixture = TestBed.createComponent(UsersComponent)

  })

  
  it('should get all the users',async(()=>{
    mockUserService.getUsers.and.returnValue(of(USERS))
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      fixture.detectChanges()
      const userComps = fixture.debugElement.queryAll(By.directive(UserComponent))
      expect(userComps.length).toBe(1)
    })

  }))

});