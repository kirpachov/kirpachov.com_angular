import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoDestroy } from '@core/lib/autodestroy';
import { Subject, takeUntil } from 'rxjs';

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

  constructor(
    private readonly router: Router
  ) {
    this.isMenuOpenChange$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.updateBodyClass();
    });

    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.isMenuOpen = false;
    });
  }

  triggerMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  private updateBodyClass() {
    if (this.isMenuOpen) {
      document.body.classList.add(`overflow-hidden`);
    } else {
      document.body.classList.remove(`overflow-hidden`);
    }
  }
}
