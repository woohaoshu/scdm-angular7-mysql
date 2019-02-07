import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        HomeComponent
    ],
    providers: []
})

export class AdminModule { }