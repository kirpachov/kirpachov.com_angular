import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicDataServiceService {

  constructor() { }

  // forHome(): Observable<Record<string, any>> {
  //   return new Observable((obs: Observer<Record<string, any>>) => {
  //     obs.next({
  //       slogan
  //     });
  //     obs.complete();
  //   });
  // }
}
