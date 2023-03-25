import { Component, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiScrollService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    @Inject(TuiScrollService) private tuiScrollService: TuiScrollService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  navigateToProjectsSection(): void {
    this.scroll('projects');
  }

  navigateToAboutSection(): void {
    this.scroll('about');
  }

  navigateToServiceSection(): void {
    this.scroll('service');
  }

  private scroll(sectionName: string): void {
    const section = document.querySelector(`#${sectionName}`);

    const data = section?.getBoundingClientRect();

    if (!(data && data.top)) return;

    this.tuiScrollService.scroll$(window, window.scrollY + data.top).subscribe({
      complete: () => {
        this.router.navigate([`.`], { relativeTo: this.route, fragment: sectionName });
      }
    }
    )
  }
}
