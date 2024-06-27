import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RuleActionService } from "./ruleAction.service";
import { RuleActionControllerBase } from "./base/ruleAction.controller.base";

@swagger.ApiTags("ruleActions")
@common.Controller("ruleActions")
export class RuleActionController extends RuleActionControllerBase {
  constructor(protected readonly service: RuleActionService) {
    super(service);
  }
}
