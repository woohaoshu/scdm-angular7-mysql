import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MembersComponent } from './members/members.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { PapersComponent } from './papers/papers.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    // { path: 'members', component: MembersComponent },
    // { path: 'papers', component: PapersComponent },
    // { path: 'projects', component: ProjectsComponent },
    // { path: 'meetings', component: MeetingsComponent },
    { path: 'photos', component: PhotosComponent },
    // { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebRoutingModule { }