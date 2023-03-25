import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutoDestroy } from '@core/lib/autodestroy';
import { TuiScrollService } from '@taiga-ui/cdk';
import { BehaviorSubject, Subject, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  readonly queryParams$: BehaviorSubject<Record<any, any>> = new BehaviorSubject<Record<any, any>>({});
  queryParams: Record<any, any> = {};

  @AutoDestroy private readonly autodestroy$ = new Subject<void>();

  constructor(
    @Inject(TuiScrollService) private tuiScrollService: TuiScrollService,
    private readonly scrollService: TuiScrollService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.queryParams$.pipe(takeUntil(this.autodestroy$)).subscribe(
        (qParams) => {
          this.queryParams = qParams;

          if (qParams['section']) this.parseSection();
        }
      )

      this.queryParams$.next(this.route.snapshot.queryParams);
      this.route.queryParams.pipe(takeUntil(this.autodestroy$)).subscribe((params) => {
        this.queryParams$.next(params);
      });
    }, 500);
  }

  saveSection(section: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { section },
      queryParamsHandling: 'merge'
    });
  }

  private parseSection(): void {
    const section = this.queryParams['section'];
    if (section) this.scrollToSection(section);
  }

  private scrollToSection(sectionName: string): void {
    const section = document.querySelector(`#${sectionName}`);

    const data = section?.getBoundingClientRect();

    if (!(data && data.top)) return;

    this.tuiScrollService.scroll$(window, window.scrollY + data.top).pipe(takeUntil(this.autodestroy$)).subscribe({
      complete: () => { }
    }
    )
  }
}
