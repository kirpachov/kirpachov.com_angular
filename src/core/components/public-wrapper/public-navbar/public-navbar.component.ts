import { Component, ElementRef, HostListener, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoDestroy } from '@core/lib/autodestroy';
import { Subject, takeUntil } from 'rxjs';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import { ConfigsService } from '@core/services/configs.service';

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

  @ViewChild('navbar', { static: true }) navbar?: ElementRef<HTMLDivElement>;

  @ViewChild('navbarLinks', { static: true }) navbarLinks?: ElementRef<HTMLDivElement>;

  private readonly isMenuOpenChange$ = new Subject<boolean>();

  private _isMenuOpen: boolean = false;

  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    this.isMenuOpenChange$.next(value);
    this.updateLinksTop();
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
    location.replace(`/${code}/#${this.router.url}`);
  }

  currentLanguage: LangData = this.languages[0];

  private localeId?: string;

  constructor(
    private readonly router: Router,
    private readonly configs: ConfigsService,
  ) {
    this.isMenuOpenChange$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.updateBodyClass();
    });

    configs.locale$.pipe(takeUntil(this.destroy$)).subscribe((locale) => {
      this.localeId = locale;
      this.updateCurrentLanguage();
    });

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.isMenuOpen = false;
      this.updateCurrentLanguage();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMenuOpen = false;
    this.updateLinksTop();
  }

  ngAfterViewInit(): void {
    this.updateLinksTop();
  }

  triggerMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private updateCurrentLanguage(): void {
    if (!(this.localeId)) return;

    this.currentLanguage = this.getCurrentLanguage();
  }

  private updateLinksTop(): void {
    if (!(this.navbar)) return;
    if (!(this.navbarLinks)) return;

    const paddingBttom = window.getComputedStyle(this.navbar.nativeElement, null).getPropertyValue('padding-bottom')
    const height = this.navbar.nativeElement.offsetHeight - parseInt(paddingBttom);
    this.navbarLinks.nativeElement.style.top = `${height}px`;
  }

  private getCurrentLanguage(): LangData {
    if (!(this.localeId)) return this.languages[0];

    const code: string | undefined = this.localeId.split('-')[0];
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
