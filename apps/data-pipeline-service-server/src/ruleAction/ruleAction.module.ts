import { Module } from "@nestjs/common";
import { RuleActionModuleBase } from "./base/ruleAction.module.base";
import { RuleActionService } from "./ruleAction.service";
import { RuleActionController } from "./ruleAction.controller";
import { RuleActionResolver } from "./ruleAction.resolver";

@Module({
  imports: [RuleActionModuleBase],
  controllers: [RuleActionController],
  providers: [RuleActionService, RuleActionResolver],
  exports: [RuleActionService],
})
export class RuleActionModule {}
