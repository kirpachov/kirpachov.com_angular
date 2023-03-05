import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicWrapperComponent } from './public-wrapper/public-wrapper.component';
import { PublicNavbarComponent } from './public-navbar/public-navbar.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicWrapperComponent,
    PublicNavbarComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PublicWrapperComponent
  ]
})
export class PublicWrapperModule { }
