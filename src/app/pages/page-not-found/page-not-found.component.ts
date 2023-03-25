import { Component, ElementRef, ViewChild } from '@angular/core';
import { BorderedButtonComponent } from '@core/components/bordered-button/bordered-button.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  secondsLeft = 10;

  @ViewChild('link') link?: BorderedButtonComponent;

  ngAfterViewInit() {
    this.startTimer();
  }

  private startTimer() {
    const interval = setInterval(() => {
      if (this.secondsLeft > 1) {
        this.secondsLeft--;
      } else {
        clearInterval(interval);
        this.redirect();
      }
    }, 1000);
  }

  private redirect(): void {
    this.link?.elementRef?.nativeElement?.click()
  }
}
