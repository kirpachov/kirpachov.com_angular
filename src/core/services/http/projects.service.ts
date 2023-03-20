import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { Project } from 'src/core/models/project';
import { ConfigsService } from '../configs.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends CommonHttpService<Project> {
  override resourcePath = `projects`;
  override type = Project;
}