import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web';
import { HomeComponent } from './web/home/home.component';
import { NewsComponent } from './web/news/news.component';
import { MembersComponent } from './web/members/members.component';
import { MeetingsComponent } from './web/meetings/meetings.component';
import { PapersComponent } from './web/papers/papers.component';
import { ProjectsComponent } from './web/projects/projects.component';
import { PhotosComponent } from './web/photos/photos.component';
import { ContactComponent } from './web/contact/contact.component';

const routes: Routes = [
  // { path: '', loadChildren: './web/web.module#WebModule' }
  { 
    path: '',
    component: WebComponent,
    children:[
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'members', component: MembersComponent },
      { path: 'meetings', component: MeetingsComponent },
      { path: 'papers', component: PapersComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
