import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'


export const routes:Routes = [ 
    {
        path:'admin',
        loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'user',
        loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
    },
    {
        path:'shared',
        loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    declarations:[],
    exports:[RouterModule]
})

export class AppRoutingModule{

}