import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { FrameComponent } from './_frame/frame.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: FrameComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'admin',
                component: FrameComponent,
                children: [
                    {
                        path: 'profile',
                        component: ProfileComponent
                    },
                ]
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