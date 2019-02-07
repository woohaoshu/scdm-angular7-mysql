import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { FrameComponent } from './frame/frame.component';
import { LoginComponent } from './login/login.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: FrameComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            }
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