import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePage1Module } from 'src/core/components/home-page1/home-page1.module';
import { ProjectCardModule } from 'src/core/components/project-card/project-card.module';
import { ViewProjectPageComponent } from './pages/view-project-page/view-project-page.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    ProjectsPageComponent,
    ContactsPageComponent,
    ViewProjectPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomePage1Module,
    ProjectCardModule,
  ]
})
export class PublicModule { }
