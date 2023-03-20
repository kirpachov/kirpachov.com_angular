import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ReactiveErrors } from '@core/lib/reactive-errors/reactive-errors';

/**
 * @description
 * This component is used to display errors for a form control.
 * 
 * @example
 * ```html
 *  <app-errors [errors]="form.controls['name']?.errors"></app-errors>
 * ```
 */
@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent {

  @Input() showErrors: boolean = true;

  private _errors?: ValidationErrors | null = null;

  get errors(): ValidationErrors | undefined | null{
    return this._errors;
  }

  @Input()
  set errors(v: ValidationErrors | undefined | null) {
    this._errors = v;
  }


  allErrors(): ValidationErrors | null {
    return this.errors || null;
  }

  errorsToTemplates(): TemplateRef<any>[] {
    return ReactiveErrors.formatErrors(this.errors || null).filter((s) => s && s instanceof TemplateRef) as TemplateRef<any>[];
  }

  errorsToStr(): string[] {
    return ReactiveErrors.formatErrors(this.errors || null).filter((s) => s && typeof s === 'string') as string[];
  }
}
