import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightThemeComponent } from './light-theme/light-theme.component';
import { DarkThemeComponent } from './dark-theme/dark-theme.component';
import { AppThemeComponent } from './app-theme/app-theme.component';



@NgModule({
  declarations: [
    LightThemeComponent,
    DarkThemeComponent,
    AppThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppThemeComponent
  ]
})
export class ThemesModule { }
