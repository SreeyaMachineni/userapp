import { ComponentFixture, TestBed,tick, fakeAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { Component } from '@angular/core';
import { User } from '../models/user';
import { By } from '@angular/platform-browser';




describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should set the user received from the parent component @Input',()=>{
    const USER:User = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    
    component.user = USER;    
    fixture.detectChanges();
    // fixture.whenStable().then(()=>{
      expect(fixture.debugElement.nativeElement.querySelector('h5').textContent).toEqual('Bret')
    // })
  })

  it('tests the @Output',fakeAsync(()=>{


    const USER:User = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    
    component.user = USER;    
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('.card-text'))
    card.triggerEventHandler('mouseenter',{})
    tick();
    fixture.detectChanges()
    const btn = fixture.debugElement.nativeElement.querySelector('.fa-list');
    spyOn(component.getTODOs,'emit')
    btn.click()
    expect(component.getTODOs.emit).toHaveBeenCalled()
  }))




});
