import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Self } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveErrors } from '@core/lib/reactive-errors/reactive-errors';
import { ContactReturnData, RfqsService } from '@core/services/http/rfqs.service';
import { NotificationsService } from '@core/services/notifications.service';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiAlertService, TuiSizeL, TuiSizeM } from '@taiga-ui/core';
import { BehaviorSubject, Subject, SubjectLike, Subscription, catchError, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [TuiDestroyService],
})
export class ContactFormComponent {

  readonly inputSize: TuiSizeM | TuiSizeL = 'm';

  readonly form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required])
  });

  submitted: boolean = false;

  get canSubmit(): boolean {
    if (this.form.invalid && this.submitted) return false;

    return true;
  }

  isWriting: boolean = false;

  private saveSubscription?: Subscription;

  get saving(): boolean {
    return this.saveSubscription?.closed === false;
  }

  constructor(
    private readonly service: RfqsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly notifications: NotificationsService,

    @Self()
    @Inject(TuiDestroyService)
    private readonly destroy$: TuiDestroyService,
  ) {
  }

  ngOnInit(): void {
    this.reset();

    this.parseQueryParams();

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => this.isWritingFn());
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    this.saveSubscription?.unsubscribe();

    this.saveSubscription = this.service.contact(this.formVal()).pipe(
      takeUntil(this.destroy$),
    ).subscribe(
      (successData: ContactReturnData) => {
        this.notifications.success($localize`Your request has been sent. I'll contact you as soon as possible.`)
        this.reset();
      },
      (e: HttpErrorResponse) => {
        this.notifications.error($localize`An error occurred while sending your request. Please try again later.`);
        if (e.status === 400 || e.status === 422) ReactiveErrors.assignErrorsToForm(this.form, e);
      }
    );
  }

  se = this.showErrorsOf;
  e = this.errorsOf;

  private reset(): void {
    this.form.reset();
    this.submitted = false;
    this.isWriting = false;
    this.saveSubscription?.unsubscribe();
  }

  private errorsOf(control: string): ValidationErrors | null {
    return this.findControl(control).errors;
  }

  private showErrorsOf(control: string): boolean {
    if (this.isWriting || !this.submitted) return false;

    return this.findControl(control).invalid;
  }

  private findControl(control: string): FormControl {
    const c = this.form.get(control);
    if (!c) throw new Error(`Control ${control} not found`);

    return c as FormControl;
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

  private isWritingTimeout: any;
  private isWritingFn(): void {
    this.isWriting = true;

    if (this.isWritingTimeout) clearTimeout(this.isWritingTimeout);

    this.isWritingTimeout = setTimeout(() => { this.isWriting = false; }, 1000);
  }
}
