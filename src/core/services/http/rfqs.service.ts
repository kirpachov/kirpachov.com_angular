import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { Project } from 'src/core/models/project';
import { ConfigsService } from '../configs.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Rfq } from '@core/models/rfq';
import { Observable, catchError, of } from 'rxjs';
import { ReactiveErrors } from '@core/lib/reactive-errors/reactive-errors';
import { ActiveError } from '@core/lib/reactive-errors/active-error';

export interface ContactReturnData {
  message: string;
  errors: ActiveError[],
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RfqsService extends CommonHttpService<Rfq> {
  override resourcePath = `rfqs`;
  override type = Rfq;

  contact(data: {[key: string]: string | number}): Observable<ContactReturnData> {
    return this.http.post<ContactReturnData>(this.getUrl(`contact`), {contact: data});
  }
}