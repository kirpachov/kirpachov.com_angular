import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePage1Module } from 'src/core/components/home-page1/home-page1.module';


@NgModule({
  declarations: [
    AboutPageComponent,
    ProjectsPageComponent,
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomePage1Module
  ]
})
export class PublicModule { }
