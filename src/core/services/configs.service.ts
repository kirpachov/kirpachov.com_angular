import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { validLocaleIds } from '@core/lib/locale-id-factory';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, forkJoin, map, of, takeUntil, tap } from 'rxjs';

const avaliableConfigs = [
  `api.domain`,
  `api.secure`,
  `api.path`,
  `contact.email`,
  `contact.phone`,
  `contact.phone.prefix`,
  `locale`
] as const;
export type ConfigKey = typeof avaliableConfigs[number];

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  private readonly defaults?: Record<string, any> = {};

  private _configs?: Record<string, any>;
  get configs(): Record<string, any> | undefined {
    return this._configs;
  }

  set configs(v: Record<string, any> | undefined){
    this.updateConfigs(v);
  }

  loadConfigs$: Observable<Record<string, any>> = this.loadConfigs().pipe(
    tap((configs) => {
      this.configs = configs;
      this.configsLoaded = true;
    })
  );

  _locale?: string = validLocaleIds[0];

  get locale(): string | undefined {
    return this._locale;
  }

  set locale(v: string | undefined){
    this.locale$.next(v);
  }

  locale$: BehaviorSubject<string|undefined> = new BehaviorSubject<string|undefined>(this.locale);

  destroy$: Subject<void> = new Subject<void>();

  configsLoaded: boolean = false;

  constructor(
    private readonly http: HttpClient,
  ) {
    this.locale$.pipe(takeUntil(this.destroy$)).subscribe((locale) => this._locale = locale);
  }

  /**
   * Get a config value.
   * Plase use this insted of getSync since if the configs are not loaded yet, this will wait for them to be loaded.
   * @param key The key of the config to get.
   * @returns An observable that emits the config value.
   */
  get(key: ConfigKey): Observable<any> {
    if (this.configsLoaded) return of(this.getSync(key));

    return this.loadConfigs$.pipe(
      map(() => this.getSync(key))
    );
  }

  /**
   * Get a config value.
   * This is the sync version of get, use it only if you are sure that the configs are already loaded.
   * @param key The key of the config to get.
   * @returns The config value.
   */
  getSync(key: ConfigKey): any {
    return (this.configs || {})[key] || (this.defaults || {})[key];
  }

  set(key: ConfigKey, value: any): void {
    this.configs ||= {};
    this.configs[key] = value;
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

  private updateConfigs(configs: Record<string, any> | undefined): void {
    this._configs = configs;
    if (!(configs)) return;

    this.locale = configs['locale'] ?? this.locale;
  }

  private loadConfigs(): Observable<Record<string, any>> {
    const load = (filename: string) => this.http.get(`assets/config/${filename}`);

    return new Observable<Record<string, any>>((obs) => {
      let final: Record<string, any> = {};
      let loaded: number = 0;
      const complete = () => {
        obs.next(final);
        obs.complete();
      };

      const done = () => {
        if (++loaded === 2) complete();
      }

      const mergeAndDone = (configs: Record<string, any>) => {
        final = { ...final, ...configs };
        done();
      }

      load('config.example.json').subscribe(example => mergeAndDone(example));

      load('config.json').subscribe(configs => mergeAndDone(configs), done);
    }).pipe(
      tap((configs) => {
        this.configs = configs;
      })
    );
  }
}
