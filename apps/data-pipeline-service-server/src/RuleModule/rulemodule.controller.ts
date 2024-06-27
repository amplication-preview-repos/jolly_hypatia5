import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RuleModuleService } from "./rulemodule.service";
import { DataInput } from "../ruleModule/DataInput";

@swagger.ApiTags("ruleModules")
@common.Controller("ruleModules")
export class RuleModuleController {
  constructor(protected readonly service: RuleModuleService) {}

  @common.Post("/add-rule")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddRule(
    @common.Body()
    body: DataInput
  ): Promise<string> {
        return this.service.AddRule(body);
      }

  @common.Post("/apply-rules")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApplyRules(
    @common.Body()
    body: DataInput
  ): Promise<string> {
        return this.service.ApplyRules(body);
      }
}
