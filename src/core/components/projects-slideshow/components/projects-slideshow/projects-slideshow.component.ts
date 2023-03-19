import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
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
  // TODO(s)
  // Get the slides from the API
  // Update slidesPerView based on the screen size
  @Input() projects?: Project[];
//   projects: PublicProject[] = [
//     {
//       id: 1,
//       title: $localize`Gestione prenotazione e menu per ristoranti`,
//       prodUrl: `https://laportadacqua.com`,
//       description: $localize`
//       Software per la gestione delle prenotazioni e del menù fornisce un biglietto da visita niente male.
// `
//     },
//     {
//       id: 2,
//       title: $localize`Business Panel Information - Panel Aziende`,
//       prodUrl: `https://bpi.demetra.com`,
//       // Il software permette alle aziende di registrarsi per rispondere a sondaggi e di visualizzare i risultati.
//       // È possibile, lato amministratore, creare sondaggi e inviarli alle aziende registrate.
//       // I sondaggi vengono retribuiti e al raggiungimento di una certa soglia minima il "panelista"
//       // può scegliere il proprio premio.
//       // Il software è stato sviluppato per la società Demetra Opinioni.net srl.
//       description: $localize`
//       Panel per aziende. Sviluppato insieme al resto del reparto IT di Demetra Opinioni.net srl.
// `
//     },
//     {
//       id: 3,
//       title: $localize`Gestione preventivi e progetti`,
//       prodUrl: `https://quotations.opinioni.net`,
//       // Software per la gestione dei preventivi e dei progetti.
//       // Permette di creare preventivi e generare documenti stampabili con tutte le informazioni dettagliate.
//       // Il cliente può vedere il preventivo attraverso un link che gli viene inviato dall'azienda.
//       // All'interno può scaricare il documento in formato PDF, in modo da poterlo rimandare firmato.
//       // Il software è stato sviluppato per la società Demetra Opinioni.net srl.
//       description: $localize`
//       Software per la gestione dei preventivi.
//       Aiuta inoltre con la fatturazione e la gestione interna dei progetti.
//       Fornisce un link per il cliente in cui può vedere il preventivo e scaricare il documento in formato PDF.
//       Sviluppato insieme al resto del reparto IT di Demetra Opinioni.net srl.
// `
//     }
//   ].map((project: PublicProject) => ({
//     ...project,
//     description: (project.description || '').replace(/\n/gm, " ")
//   }));

  @Input() projectLink: (project: Project) => string = (project: Project) => `/projects/${project.id}`;

  @ViewChild(SwiperComponent) swiper?: any;

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
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cd();
  }

  ngAfterViewInit(): void {
    this.cd();
  }

  ngOnChanges(): void {
    this.cd();
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
}
