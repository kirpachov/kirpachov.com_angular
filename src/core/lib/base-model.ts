import { BaseModelData } from "./interfaces/base-model-data";

export class BaseModel {
  static railsClassName: string = 'Class';

  id?: number;
  updated_at?: Date;
  created_at?: Date;

  data: any;

  constructor(data: BaseModelData) {
    this.id = data.id;
    this.data = data;

    if (data.updated_at) this.updated_at = new Date(data.updated_at);
    if (data.created_at) this.created_at = new Date(data.created_at);
  }
}