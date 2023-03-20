import { Inject, Injectable } from '@angular/core';
import { TuiAlertOptions, TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    // @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
  ) {
    console.log(this);
  }

  open(message: string, params: Partial<TuiAlertOptions<any>>): Observable<any> {
    return this.alertService.open(message, params);
  }

  success(message: string, params: Partial<TuiAlertOptions<any>> = {}): void {
    this.open(message, {
      ...{
        status: TuiNotification.Success,
        hasIcon: true,
        autoClose: false,
        hasCloseButton: true,
      },
      ...params
    }).subscribe();
  }

  error(message: string, params: Partial<TuiAlertOptions<any>> = {}): void {
    this.open(message, {
      ...{
        status: TuiNotification.Error,
        hasIcon: true,
        autoClose: false,
        hasCloseButton: true,
      },
      ...params
    }).subscribe();
  }
}
