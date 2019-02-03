import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InViewportModule } from 'angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { HeaderComponent } from './_header/header.component';
import { FooterComponent } from './_footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MembersComponent } from './members/members.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { PapersComponent } from './papers/papers.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';

import { MeetingDocPipe } from './_pipes/meeting-doc.pipe';
import { MeetingDocImgPipe } from './_pipes/meeting-doc-img.pipe';

import { BaiduMapModule } from 'angular2-baidu-map';
import { BaiduMapComponent } from './contact/baidu.map.component';

@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    MembersComponent,
    MeetingsComponent,
    PapersComponent,
    ProjectsComponent,
    PhotosComponent,
    ContactComponent,
    MeetingDocPipe,
    MeetingDocImgPipe,
    BaiduMapComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    InViewportModule,
    ScrollSpyModule.forRoot(),
    BaiduMapModule.forRoot({ ak: 'SSePR0qpFovGtDuBlWVa9deztpONDfzs' })
  ]
})
export class WebModule { }
