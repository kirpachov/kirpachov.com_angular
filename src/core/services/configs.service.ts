import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  private readonly defaults: Record<string, any> = {
    contactEmail: 'oleksandr.kirpachov@gmail.com'
  };

  private configs: Record<string, any> = {};

  constructor() {}

  get(key: string): Observable<any> {
    return of(this.configs[key] || this.defaults[key]);
  }
}
