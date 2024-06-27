import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DatasourceService } from "./datasource.service";
import { DatasourceControllerBase } from "./base/datasource.controller.base";

@swagger.ApiTags("datasources")
@common.Controller("datasources")
export class DatasourceController extends DatasourceControllerBase {
  constructor(protected readonly service: DatasourceService) {
    super(service);
  }
}
