import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicWrapperComponent } from './public-wrapper/public-wrapper.component';
import { PublicNavbarComponent } from './public-navbar/public-navbar.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { RouterModule } from '@angular/router';
import { UnderlinedButtonModule } from '../underlined-button/underlined-button.module';
import { BorderedButtonModule } from '../bordered-button/bordered-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MenuIconModule } from '../menu-icon/menu-icon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiFlagPipeModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    PublicWrapperComponent,
    PublicNavbarComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UnderlinedButtonModule,
    BorderedButtonModule,
    MatIconModule,
    MenuIconModule,
    ReactiveFormsModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiFlagPipeModule,
  ],
  exports: [
    PublicWrapperComponent
  ]
})
export class PublicWrapperModule { }
