import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveErrors } from '@core/lib/reactive-errors/reactive-errors';
import { ContactReturnData, RfqsService } from '@core/services/http/rfqs.service';
import { NotificationsService } from '@core/services/notifications.service';
import { TuiAlertService, TuiSizeL, TuiSizeM } from '@taiga-ui/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  readonly inputSize: TuiSizeM | TuiSizeL = 'm';

  readonly form: FormGroup = new FormGroup({
    name: new FormControl(null), // [Validators.required]
    email: new FormControl(null), // [Validators.required, Validators.email]
    message: new FormControl(null) // [Validators.required, Validators.minLength(5)]
  });

  constructor(
    private readonly service: RfqsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly notifications: NotificationsService,
  ) {
    this.parseQueryParams();
  }

  submit(): void {
    if (this.form.invalid) return;

    this.service.contact(this.formVal()).subscribe(
      (successData: ContactReturnData) => {
        this.notifications.success($localize`Your request has been sent. I'll contact you as soon as possible.`)
        this.form.reset();
      },
      (e: HttpErrorResponse) => {
        this.notifications.error($localize`An error occurred while sending your request. Please try again later.`);
        if (e.status === 400 || e.status === 422) ReactiveErrors.assignErrorsToForm(this.form, e);
      }
    );
  }

  private formVal(): Record<string, any> {
    const formVal: Record<string, any> = this.form.value;

    return formVal;
  }

  private parseQueryParams(): void {
    this.route.queryParams.subscribe((params: {[key: string]: any}) => {
      if (params['name']) this.form.get('name')?.setValue(params['name']);
      if (params['email']) this.form.get('email')?.setValue(params['email']);
      if (params['message']) this.form.get('message')?.setValue(params['message']);
    });
  }
}
