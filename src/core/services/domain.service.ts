import { EnvironmentInjector, Injectable } from '@angular/core';
import { ConfigsService } from './configs.service';
import { forkJoin } from 'rxjs';
// import { Config } from '@core/lib/config';
// import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  protected readonly version: number = 1;
  protected get versionNamespace(): string{
    return `/v${this.version}/`;
  }

  // E.g. `/api`
  apiPath?: string;

  // E.g. `activities`
  resourcePath?: string;

  // E.g. `opinioni.net`
  domain?: string;

  secure?: boolean;

  constructor(
    protected configService: ConfigsService
  ) {
    this.loadConfigs();
  }

  getBaseUrl(): string {
    const protocol = `http${this.secure ? `s` : ``}://`;
    return `${protocol}${this.domain}${this.apiPath}${this.versionNamespace}${this.resourcePath}`;
  }

  getUrl(path: string | number): string {
    return `${this.getBaseUrl()}/${path}`;
  }

  loadConfigs(): void {
    forkJoin(
      ([`domain`, `secure`, `path`] as const).map((key) => this.configService.get(`api.${key}`))
    ).subscribe(([domain, secure, path]) => {
      this.domain = domain;
      this.secure = secure ? secure === `true` : false;
      this.apiPath = path;
    });
  }
}
