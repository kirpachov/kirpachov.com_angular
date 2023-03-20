import { BaseModel } from "@core/lib/base-model";
import { RfqData } from "@core/lib/interfaces/rfq-data";

export class Rfq extends BaseModel {
  constructor(data: RfqData){
    super(data);
  }
}