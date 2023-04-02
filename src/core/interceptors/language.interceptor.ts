import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigsService } from '@core/services/configs.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  constructor(
    private readonly configs: ConfigsService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.configs.locale) {
      request = request.clone({
        setHeaders: {
          'Accept-Language': this.configs.locale
        }
      });
    } else {
      console.warn(`No locale set in configs!`)
    }

    return next.handle(request);
  }
}
