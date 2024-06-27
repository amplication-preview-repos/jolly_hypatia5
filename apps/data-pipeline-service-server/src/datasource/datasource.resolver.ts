import * as graphql from "@nestjs/graphql";
import { DatasourceResolverBase } from "./base/datasource.resolver.base";
import { Datasource } from "./base/Datasource";
import { DatasourceService } from "./datasource.service";

@graphql.Resolver(() => Datasource)
export class DatasourceResolver extends DatasourceResolverBase {
  constructor(protected readonly service: DatasourceService) {
    super(service);
  }
}
