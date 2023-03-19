import { Component } from '@angular/core';
import { Subscription, takeUntil } from 'rxjs';
import { SearchResult } from 'src/core/lib/search-result.model';
import { WithSubscriptions } from 'src/core/lib/with-autodestroy';
import { Project } from 'src/core/models/project';
import { ProjectsService } from 'src/core/services/http/projects.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent extends WithSubscriptions {

  projects?: Project[];

  private searchSubscription?: Subscription;

  constructor(
    private readonly service: ProjectsService
  ){
    super();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.search();
  }

  private search(): void {
    const unsub = () => this.searchSubscription?.unsubscribe();

    unsub();
    this.service.search().pipe(takeUntil(this.destroy$)).subscribe((data: SearchResult<Project>) => {
      this.projects = data.items;
      unsub();
    }, () => {
      unsub();
    });
  }
}
