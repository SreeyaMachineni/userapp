import { ComponentFixture, TestBed,fakeAsync,tick,async,inject } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing"
import {Router, RouterLink} from "@angular/router";
import {AdminhomeComponent} from '../../admin/adminhome/adminhome.component';
import {routes} from '../../../app/app-routing.module'
import {DebugElement} from '@angular/core';

import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';


// describe('NavComponent', () => {
//   let component: NavComponent;
//   let fixture: ComponentFixture<NavComponent>;
  

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ NavComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule
      ],
      declarations: [ NavComponent ],
      providers: [
        Location
    ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(NavComponent);
    router.initialNavigation();

  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(NavComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should navigate from empty path to welcome', fakeAsync(() => {
    router.navigate(['/admin']);
    tick();
    expect(location.path()).toBe('/admin');
}));
});




