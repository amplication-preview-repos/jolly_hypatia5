import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RuleConditionService } from "./ruleCondition.service";
import { RuleConditionControllerBase } from "./base/ruleCondition.controller.base";

@swagger.ApiTags("ruleConditions")
@common.Controller("ruleConditions")
export class RuleConditionController extends RuleConditionControllerBase {
  constructor(protected readonly service: RuleConditionService) {
    super(service);
  }
}
