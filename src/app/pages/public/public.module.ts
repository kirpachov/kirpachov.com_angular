import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePage1Module } from 'src/core/components/home-page1/home-page1.module';
import { ProjectCardModule } from 'src/core/components/project-card/project-card.module';
import { ViewProjectPageComponent } from './pages/view-project-page/view-project-page.component';
import { ContactFormModule } from '@core/components/contact-form/contact-form.module';
import { TuiFormatPhonePipeModule, TuiLinkModule, TuiLoaderModule } from '@taiga-ui/core';
import { UnderlinedButtonModule } from '@core/components/underlined-button/underlined-button.module';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPageInModalModule } from 'node_modules/ngx-page-in-modal';
import { BorderedButtonModule } from '@core/components/bordered-button/bordered-button.module';


@NgModule({
  declarations: [
    AboutPageComponent,
    ProjectsPageComponent,
    ContactsPageComponent,
    ViewProjectPageComponent,
    CreditsPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomePage1Module,
    ProjectCardModule,
    ContactFormModule,
    MatIconModule,
    UnderlinedButtonModule,
    TuiFormatPhonePipeModule,
    TuiLoaderModule,
    NgxPageInModalModule,
    BorderedButtonModule
  ]
})
export class PublicModule { }
