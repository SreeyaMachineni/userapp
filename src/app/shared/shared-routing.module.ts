import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule,Routes} from '@angular/router'
import { TodosComponent } from './todos/todos.component';

const routes:Routes = [ 
   {
       path:'todos',
       component:TodosComponent
   }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})

export class SharedRoutingModule{

}