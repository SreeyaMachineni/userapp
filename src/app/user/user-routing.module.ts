import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {UserhomeComponent} from './userhome/userhome.component'

const routes:Routes = [
    {
        path:'',
        component:UserhomeComponent
    }

]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})

export class UserRoutingModule{
    
}