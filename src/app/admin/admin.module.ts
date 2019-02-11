import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { FrameComponent } from './_frame/frame.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        FrameComponent,
        LoginComponent,
        ProfileComponent
    ],
    providers: []
})

export class AdminModule { }