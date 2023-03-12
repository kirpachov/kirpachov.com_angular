import { Component, Input, SimpleChanges } from '@angular/core';
import { PublicProject } from 'src/core/lib/public-project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() id?: number;
  @Input() title?: string;
  @Input() url?: string;
  @Input() description?: string;
  @Input() projectUrl?: string;
  @Input() startDate?: Date;
  @Input() endDate?: Date;
  @Input() links?: PublicProject['links'];

  private _project?: PublicProject;
  @Input() set project(v: PublicProject | undefined){
    this.id = v?.id;
    this.title = v?.title;
    this.url = v?.prodUrl;
    this.description = v?.description;
    this.projectUrl = v?.links?.find(l => l.title === 'Project')?.url;
    this.startDate = v?.startDate;
    this.endDate = v?.endDate;
    this.links = v?.links;
    this._project = v;
  }

  get project(): PublicProject | undefined {
    return this._project;
  }

  @Input() location: 'home' | 'projects' = 'projects';

  shortUrl?: string;

  validLinks: { title: string, url: string, isLocal: boolean, localUrl: string }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['url'] || changes['project']) this.calcShortUrl();
    if(changes['links'] || changes['project']) this.calcValidLinks();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.calcShortUrl()
  }

  private calcShortUrl(): void {
    this.shortUrl = this.url?.replace(/(^\w+:|^)\/\//, '');
  }

  private calcValidLinks(): void {
    this.validLinks = (this.links || []).filter(l => {
      return l.title && l.title.length > 0 && l.url && l.url.length > 0;
    }).map(l => {
      return {
        title: l.title,
        url: l.url,
        isLocal: l.url.startsWith(window.location.origin),
        localUrl: l.url.replace(window.location.origin, '')
      }
    });
    // this.validLinks = this.links?.filter(l => l.title !== 'Project') || [];
  }
}
