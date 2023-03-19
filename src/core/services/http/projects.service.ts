import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { Project } from 'src/core/models/project';
import { ConfigsService } from '../configs.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends CommonHttpService<Project> {
  // pipe(until: () => import("rxjs").MonoTypeOperatorFunction<unknown>) {
  //   throw new Error('Method not implemented.');
  // }

  // protected override type = Project;
  // protected path = "projects"
  // protected override itemName = "project"
  // protected paramsToDelete = ["id", "created_at", "customActivityTitle"]
  override resourcePath = `projects`;
  override type = Project;
}