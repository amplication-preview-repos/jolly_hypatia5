import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DatasourceModuleService } from "./datasourcemodule.service";
import { DatasourceInput } from "../datasourceModule/DatasourceInput";

@swagger.ApiTags("datasourceModules")
@common.Controller("datasourceModules")
export class DatasourceModuleController {
  constructor(protected readonly service: DatasourceModuleService) {}

  @common.Get("/:id/connect-datasource")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConnectDatasource(
    @common.Body()
    body: DatasourceInput
  ): Promise<string> {
        return this.service.ConnectDatasource(body);
      }

  @common.Post("/establish-connection")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EstablishDatasourceConnection(
    @common.Body()
    body: DatasourceInput
  ): Promise<string> {
        return this.service.EstablishDatasourceConnection(body);
      }
}
