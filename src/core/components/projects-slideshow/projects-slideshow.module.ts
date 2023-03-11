import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSlideshowComponent } from './components/projects-slideshow/projects-slideshow.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import { UnderlinedButtonModule } from '../underlined-button/underlined-button.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProjectsSlideshowComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MatIconModule,
    UnderlinedButtonModule,
    RouterModule,
  ],
  exports: [
    ProjectsSlideshowComponent,
    ProjectCardComponent
  ]
})
export class ProjectsSlideshowModule { }
