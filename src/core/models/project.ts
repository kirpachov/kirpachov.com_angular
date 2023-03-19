import { BaseModel } from "../lib/base-model";
import { ProjectData, ProjectStatus, ProjectVisibility } from "../lib/interfaces/project-data";
import { Link } from "./project-link";

export class Project extends BaseModel {
  status?: ProjectStatus;
  start_date?: Date;
  end_date?: Date;
  production_urls?: string[];
  visibility?: ProjectVisibility;
  title?: string;
  description?: string;

  links?: Link[];

  constructor(data: ProjectData) {
    super(data);

    this.status = data.status;
    this.start_date = data.start_date;
    this.end_date = data.end_date;
    this.production_urls = data.production_urls;
    this.visibility = data.visibility;
    this.title = data?.title ?? ``;
    this.description = data?.description ?? ``;
    this.links = data.links?.map(l => new Link(l));
  }
}