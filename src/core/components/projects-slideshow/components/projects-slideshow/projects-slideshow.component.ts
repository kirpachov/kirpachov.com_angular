import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from 'src/core/models/project';
// import { PublicProject } from 'src/core/lib/public-project';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-projects-slideshow',
  templateUrl: './projects-slideshow.component.html',
  styleUrls: ['./projects-slideshow.component.scss'],
})
export class ProjectsSlideshowComponent {
  @Input() projects?: Project[];

  @Input() projectLink: (project: Project) => string = (project: Project) => `/projects/${project.id}`;

  @ViewChild(SwiperComponent) swiper?: any;

  componentWidth: number = 0;

  private readonly slideMinWidth = 400;

  _slidesPerView = 3;
  get slidesPerView(): number {
    if (!(this.projects)) return 0;

    const s = this._slidesPerView;
    if (s > this.projects.length) return this.projects.length;
    return s;
  }

  set slidesPerView(value: number) {
    this._slidesPerView = value;
  }

  swiperCurrentIndex: number = 0;
  swiperNavigated: boolean = false;
  navigateBackButtonEnabled: boolean = false;
  navigateForwardButtonEnabled: boolean = true;

  private readonly cd = () => this.cdr.detectChanges();

  constructor(
    private cdr: ChangeDetectorRef,
    private readonly ref: ElementRef
  ) { }

  ngOnInit(): void {
    this.cd();
  }

  ngAfterViewInit(): void {
    this.cd();
    this.calcComponentWidth();
  }

  ngOnChanges(): void {
    this.cd();
    this.calcComponentWidth();
  }

  activeIndexChange(event: [Swiper]): void {
    if (!(this.swiperNavigated)) this.swiperNavigated = true;
    const swiper = event[0];
    const activeIndex = swiper.activeIndex;
    this.swiperCurrentIndex = activeIndex;
    this.navigateBackButtonEnabled = activeIndex > 0;
    this.navigateForwardButtonEnabled = activeIndex < (this.projects || []).length - this.slidesPerView;
    this.cd();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.calcComponentWidth();
  }

  private calcComponentWidth(): void {
    this.componentWidth = this.ref.nativeElement.offsetWidth;
    this.cd();

    this.slidesPerView = Math.floor(this.componentWidth / this.slideMinWidth);
  }
}
