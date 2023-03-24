import { Component } from '@angular/core';
import { AutoDestroy } from '@core/lib/autodestroy';
import { SearchResult } from '@core/lib/search-result.model';
import { ProjectsService } from '@core/services/http/projects.service';
import { BehaviorSubject, Subject, Subscription, takeUntil } from 'rxjs';
import { Project } from 'src/core/models/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  @AutoDestroy destroy$: Subject<void> = new Subject<void>();

  projects?: Project[];
  projects$: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  private loadProjects?: Subscription;

  get loading(): boolean {
    return this.loadProjects?.closed === false;
  }

  constructor(
    private readonly service: ProjectsService
  ) {
    this.projects$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((pjs: Project[]) => {
      this.projects = pjs;
    })
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loadProjects?.unsubscribe();

    this.loadProjects = this.service.search({page: 1, per_page: 1000}).pipe(takeUntil(this.destroy$)).subscribe((data: SearchResult<Project>) => {
      this.projects$.next(data.items ?? []);
    })
  }
}
