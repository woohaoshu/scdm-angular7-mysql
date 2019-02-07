import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { FrameComponent } from './frame/frame.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        FrameComponent,
        LoginComponent
    ],
    providers: []
})

export class AdminModule { }