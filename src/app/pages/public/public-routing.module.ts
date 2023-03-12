import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from 'src/core/components/home-page1/components/home-page/home-page.component';
import { ViewProjectPageComponent } from './pages/view-project-page/view-project-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    children: [
      {
        path: ':project_id',
        component: ViewProjectPageComponent
      }
    ]
  },
  {
    path: 'contacts',
    component: ContactsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
