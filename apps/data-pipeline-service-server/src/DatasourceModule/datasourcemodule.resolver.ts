import * as graphql from "@nestjs/graphql";
import { DatasourceInput } from "../datasourceModule/DatasourceInput";
import { DatasourceModuleService } from "./datasourcemodule.service";

export class DatasourceModuleResolver {
  constructor(protected readonly service: DatasourceModuleService) {}

  @graphql.Query(() => String)
  async ConnectDatasource(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConnectDatasource(args);
  }

  @graphql.Mutation(() => String)
  async EstablishDatasourceConnection(
    @graphql.Args()
    args: DatasourceInput
  ): Promise<string> {
    return this.service.EstablishDatasourceConnection(args);
  }
}
