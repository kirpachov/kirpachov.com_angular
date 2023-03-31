import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoDestroy } from '@core/lib/autodestroy';
import { Subject, takeUntil } from 'rxjs';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

export interface LangData {
  name: string;
  code: string;
  iso: TuiCountryIsoCode;
}

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})
export class PublicNavbarComponent {

  @AutoDestroy
  private readonly destroy$ = new Subject<void>();

  private readonly isMenuOpenChange$ = new Subject<boolean>();

  private _isMenuOpen: boolean = false;

  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    this.isMenuOpenChange$.next(value);
  }

  readonly languages: LangData[] = [
    {
      name: "English",
      code: "en",
      iso: TuiCountryIsoCode.US
    },
    {
      name: "Italiano",
      code: "it",
      iso: TuiCountryIsoCode.IT
    },
  ];

  ngOnInit() { }

  changePath(code: LangData['code']) {
    location.replace(`/${code}/`);
  }

  currentLanguage: LangData = this.languages[0];

  constructor(
    private readonly router: Router,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.isMenuOpenChange$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.updateBodyClass();
    });

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.isMenuOpen = false;
      this.currentLanguage = this.getCurrentLanguage();
    });
  }

  triggerMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private getCurrentLanguage(): LangData {
    const code = this.localeId.split('-')[0] as string;
    // const code: "it" | "en" | "" = location.pathname.replace(/\/+/g, '') as any;
    return this.languages.find(lang => lang.code === code) || this.languages[0];
  }

  private updateBodyClass() {
    if (this.isMenuOpen) {
      document.body.classList.add(`overflow-hidden`);
    } else {
      document.body.classList.remove(`overflow-hidden`);
    }
  }
}
