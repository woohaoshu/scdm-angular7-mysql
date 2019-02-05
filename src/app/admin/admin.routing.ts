import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home';
import { ManagerComponent } from './manager';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { Role } from './_models';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'manager',
                component: ManagerComponent,
                canActivate: [AuthGuard],
                data: { roles: [Role.Admin] }
            },
            {
                path: 'login',
                component: LoginComponent
            },
            // otherwise redirect to home
            // { path: '**', redirectTo: '' }
        ]
    }
    
];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }