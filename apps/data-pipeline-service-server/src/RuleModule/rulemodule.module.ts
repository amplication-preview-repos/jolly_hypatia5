import { Module } from "@nestjs/common";
import { RuleModuleService } from "./rulemodule.service";
import { RuleModuleController } from "./rulemodule.controller";
import { RuleModuleResolver } from "./rulemodule.resolver";

@Module({
  controllers: [RuleModuleController],
  providers: [RuleModuleService, RuleModuleResolver],
  exports: [RuleModuleService],
})
export class RuleModuleModule {}
