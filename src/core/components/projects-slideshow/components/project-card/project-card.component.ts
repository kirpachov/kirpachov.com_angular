import { Component, Input, SimpleChanges } from '@angular/core';

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

  shortUrl?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['url']) this.calcShortUrl();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.calcShortUrl()
  }

  private calcShortUrl(): void {
    this.shortUrl = this.url?.replace(/(^\w+:|^)\/\//, '');
  }
}
