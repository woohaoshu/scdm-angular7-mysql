import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebModule } from './web/web.module';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  { path: '', loadChildren: './web/web.module#WebModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
