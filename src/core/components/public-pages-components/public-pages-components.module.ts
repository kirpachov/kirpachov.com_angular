import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonArrowComponent } from './main-button-arrow/main-button-arrow.component';
import { SecondaryButtonArrowComponent } from './secondary-button-arrow/secondary-button-arrow.component';
import { NobordersButtonArrowComponent } from './noborders-button-arrow/noborders-button-arrow.component';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { MatIconModule } from '@angular/material/icon';

const components = [
  MainButtonArrowComponent,
  SecondaryButtonArrowComponent,
  NobordersButtonArrowComponent,
];

@NgModule({
  declarations: [
    ...components,
    ButtonArrowComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ...components
  ]
})
export class PublicPagesComponentsModule { }
