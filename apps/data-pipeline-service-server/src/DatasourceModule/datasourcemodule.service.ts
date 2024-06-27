import { Injectable } from "@nestjs/common";
import { DatasourceInput } from "../datasourceModule/DatasourceInput";

@Injectable()
export class DatasourceModuleService {
  constructor() {}
  async ConnectDatasource(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EstablishDatasourceConnection(args: DatasourceInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
