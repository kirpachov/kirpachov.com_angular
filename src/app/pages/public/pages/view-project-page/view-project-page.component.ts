import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoDestroy } from '@core/lib/autodestroy';
import { SearchResult } from '@core/lib/search-result.model';
import { Project } from '@core/models/project';
import { ProjectsService } from '@core/services/http/projects.service';
import { Subject, BehaviorSubject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-view-project-page',
  templateUrl: './view-project-page.component.html',
  styleUrls: ['./view-project-page.component.scss']
})
export class ViewProjectPageComponent {

  @AutoDestroy destroy$: Subject<void> = new Subject<void>();

  project?: Project;
  project$: BehaviorSubject<Project | undefined> = new BehaviorSubject<Project | undefined>(undefined);

  private loadProject?: Subscription;

  itemId?: number;

  get loading(): boolean {
    return this.loadProject?.closed === false;
  }

  constructor(
    private readonly service: ProjectsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.project$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(pjs => {
      this.project = pjs;
    })
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.itemId = params['project_id'];
      this.load();
    });
  }

  load(): void {
    if (!(this.itemId && this.itemId > 0)) return;

    this.loadProject?.unsubscribe();

    this.loadProject = this.service.get(this.itemId).pipe(takeUntil(this.destroy$)).subscribe((item: Project) => {
      this.project$.next(item);
    })
  }
}
