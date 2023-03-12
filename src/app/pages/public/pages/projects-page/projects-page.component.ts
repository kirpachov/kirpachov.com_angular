import { Component } from '@angular/core';
import { PublicProject } from 'src/core/lib/public-project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  readonly projects: PublicProject[] = Array.from({ length: 15 }).map((el, index) => ({
    title: `Project ${index + 1}`,
    id: index + 1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis nisl.`,
    prodUrl: 'https://google.com',
    startDate: new Date('2020-01-01'),
    endDate: new Date(),
    links: [
      {
        title: 'link 1',
        url: 'https://google.com'
      },
      {
        title: 'link 2',
        url: `${window.location.origin}/link-to-local-page/${index + 1}`
      }
    ]
  }));
}
