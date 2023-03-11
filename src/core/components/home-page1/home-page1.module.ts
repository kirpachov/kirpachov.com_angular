import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { PublicPagesComponentsModule } from '../public-pages-components/public-pages-components.module';
import { RouterModule } from '@angular/router';
import { ProjectsSlideshowModule } from '../projects-slideshow/projects-slideshow.module';
import { UnderlinedButtonModule } from '../underlined-button/underlined-button.module';



@NgModule({
  declarations: [
    HomePageComponent,
    MainSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ServiceSectionComponent
  ],
  imports: [
    CommonModule,
    PublicPagesComponentsModule,
    RouterModule,
    ProjectsSlideshowModule,
    UnderlinedButtonModule,
  ]
})
export class HomePage1Module { }
