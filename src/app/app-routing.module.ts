import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebModule } from './web/web.module';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  { path: '', loadChildren: () => WebModule },
  { path: 'admin', loadChildren: () => AdminModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
