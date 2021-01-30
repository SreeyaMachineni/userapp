import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AdminhomeComponent} from './adminhome/adminhome.component'
import {SharedModule} from '../shared/shared.module'

const routes:Routes = [
    {
        path:'',
        component:AdminhomeComponent
    }

]
@NgModule({
    imports:[RouterModule.forChild(routes),SharedModule],
    declarations:[AdminhomeComponent],
    exports:[RouterModule]
})

export class AdminRoutingModule{

}