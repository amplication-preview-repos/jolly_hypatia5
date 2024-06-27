import { Module } from "@nestjs/common";
import { RuleConditionModuleBase } from "./base/ruleCondition.module.base";
import { RuleConditionService } from "./ruleCondition.service";
import { RuleConditionController } from "./ruleCondition.controller";
import { RuleConditionResolver } from "./ruleCondition.resolver";

@Module({
  imports: [RuleConditionModuleBase],
  controllers: [RuleConditionController],
  providers: [RuleConditionService, RuleConditionResolver],
  exports: [RuleConditionService],
})
export class RuleConditionModule {}
