import * as graphql from "@nestjs/graphql";
import { RuleInput } from "../ruleModule/RuleInput";
import { DataInput } from "../ruleModule/DataInput";
import { RuleModuleService } from "./rulemodule.service";

export class RuleModuleResolver {
  constructor(protected readonly service: RuleModuleService) {}

  @graphql.Mutation(() => String)
  async AddRule(
    @graphql.Args()
    args: RuleInput
  ): Promise<string> {
    return this.service.AddRule(args);
  }

  @graphql.Mutation(() => String)
  async ApplyRules(
    @graphql.Args()
    args: DataInput
  ): Promise<string> {
    return this.service.ApplyRules(args);
  }
}
