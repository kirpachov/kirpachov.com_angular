import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightThemeComponent } from './light-theme/light-theme.component';
import { DarkThemeComponent } from './dark-theme/dark-theme.component';
import { AppThemeComponent } from './app-theme/app-theme.component';
import { TuiThemeNightModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    LightThemeComponent,
    DarkThemeComponent,
    AppThemeComponent
  ],
  imports: [
    CommonModule,
    TuiThemeNightModule,
  ],
  exports: [
    AppThemeComponent
  ]
})
export class ThemesModule { }
