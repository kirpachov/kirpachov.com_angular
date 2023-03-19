import { BaseModel } from "../lib/base-model";
import { LinkData } from "../lib/interfaces/link-data";

export class Link extends BaseModel {
  url?: string;
  title?: string;

  constructor(data: LinkData) {
    super(data);

    this.url = data.url;
    this.title = data.title;
  }
}