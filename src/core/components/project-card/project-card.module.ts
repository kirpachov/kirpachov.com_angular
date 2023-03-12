import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'swiper/angular';
import { UnderlinedButtonModule } from '../underlined-button/underlined-button.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
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
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
