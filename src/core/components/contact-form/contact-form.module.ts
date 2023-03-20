import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsModule } from '../errors/errors.module';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiModeModule, TuiRootModule, TuiTextfieldControllerModule, TuiThemeNightModule } from '@taiga-ui/core';


@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiModeModule,
    TuiRootModule,
    TuiThemeNightModule,
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
