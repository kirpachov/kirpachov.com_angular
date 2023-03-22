import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';

const avaliableConfigs = [
  `api.domain`,
  `api.secure`,
  `api.path`,
  `contact.email`,
  `contact.phone`,
  `contact.phone.prefix`,
] as const;
export type ConfigKey = typeof avaliableConfigs[number];

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  private readonly defaults?: Record<string, any> = {};

  private configs?: Record<string, any>;

  configsLoaded: Observable<Record<string, any>> = this.loadConfigs().pipe(
    tap((configs) => {
      this.configs = configs;
    })
  );

  constructor(
    private readonly http: HttpClient,
  ) {}

  get(key: ConfigKey): Observable<any> {
    return of((this.configs ?? {})[key] || (this.defaults ?? {})[key]);
  }

  getMultiple(keys: ConfigKey[]): Observable<Record<string, any>> {
    return forkJoin(keys.map((key) => this.get(key))).pipe(
      map((values) => {
        const result: Record<string, any> = {};
        keys.forEach((key, index) => {
          result[key] = values[index];
        });
        return result;
      })
    );
  }

  private loadConfigs(): Observable<Record<string, any>> {
    const load = (filename: string) => this.http.get(`assets/config/${filename}`);

    return new Observable<Record<string, any>>((obs) => {
      let final = {};
      let loaded: number = 0;
      const complete = () => {
        obs.next(final);
        obs.complete();
      };

      const done = () => {
        if (++loaded === 2) complete();
      }

      load('config.example.json').subscribe((example) => {
        final = { ...final, ...example };
        done();
      });

      load('config.json').subscribe((configs) => {
        final = { ...final, ...configs };
        done();
      }, () => {
        done();
      });
    }).pipe(
      tap((configs) => {
        this.configs = configs;
      })
    );
  }
}
