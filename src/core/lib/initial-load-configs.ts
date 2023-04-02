import { ConfigsService } from "../services/configs.service";

export function initialLoadConfigs(configs: ConfigsService){
  return () => configs.loadConfigs$.toPromise();
}