import { BaseModelData } from "./base-model-data";
import { LinkData } from "./link-data";

export interface ProjectData extends BaseModelData {
  status: ProjectStatus;
  start_date: Date;
  end_date: Date;
  production_urls: string[];
  visibility: ProjectVisibility;
  title?: string;
  description?: string;
  links?: LinkData[];
}

export const ProjectStatusOptions = [`pending`, `wip`, `done`, `canceled`, `deleted`] as const;
export type ProjectStatus = typeof ProjectStatusOptions[number];

export const ProjectVisibilityOptions = [`public`, `internal`] as const;
export type ProjectVisibility = typeof ProjectVisibilityOptions[number];