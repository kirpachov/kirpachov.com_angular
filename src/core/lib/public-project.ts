
export interface PublicProject {
  id?: number;
  title?: string;
  prodUrl?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  links?: PublicProjectLink[]
}

export interface PublicProjectLink {
  title: string;
  url: string;
}