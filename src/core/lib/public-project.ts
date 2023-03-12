
export interface PublicProject {
  id?: number;
  title?: string;
  prodUrl?: string;
  description?: string;
  links?: {
    title: string,
    url: string
  }[]
}