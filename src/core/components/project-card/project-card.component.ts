import { Component, Input, SimpleChanges } from '@angular/core';
import { Project } from 'src/core/models/project';
import { Link } from 'src/core/models/project-link';

type ValidLink = { title: string, url: string, isLocal: boolean, localUrl: string };

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project?: Project;

  get title(): string | undefined {
    return this.project?.title;
  }

  get description(): string | undefined {
    return this.project?.description;
  }

  get links(): Link[] {
    return this.project?.links ?? [];
  }

  get startDate(): Date | undefined {
    return this.project?.start_date;
  }

  get endDate(): Date | undefined {
    return this.project?.end_date;
  }

  get id(): number | undefined {
    return this.project?.id;
  }

  @Input() location: 'home' | 'projects' = 'projects';

  shortUrls?: string[];

  validLinks: ValidLink[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['url'] || changes['project']) this.calcShortUrl();
    if(changes['links'] || changes['project']) this.calcValidLinks();
  }

  ngAfterViewInit(): void {
    this.calcShortUrl()
  }

  private calcShortUrl(): void {
    this.shortUrls = this.project?.production_urls?.map((url: string) => url?.replace(/(^\w+:|^)\/\//, ''));
  }

  private calcValidLinks(): void {
    this.validLinks = (this.project?.links || []).filter((l: Link) => {
      return l.title && l.title.length > 0 && l.url && l.url.length > 0;
    }).map((l: Link) => ({
        title: l.title!,
        url: l.url!,
        isLocal: l.url!.startsWith(window.location.origin),
        localUrl: l.url!.replace(window.location.origin, '')
    }));
  }
}
