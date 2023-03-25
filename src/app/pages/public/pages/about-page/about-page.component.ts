import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TuiScrollService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  constructor(
    private readonly scrollService: TuiScrollService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngAfterViewInit(): void {
    if (this.router.url.indexOf('#') == -1)
      this.scrollService.scroll$(window, 0).subscribe();
  }
}
