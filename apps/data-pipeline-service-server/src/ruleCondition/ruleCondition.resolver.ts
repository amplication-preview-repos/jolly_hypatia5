import * as graphql from "@nestjs/graphql";
import { RuleConditionResolverBase } from "./base/ruleCondition.resolver.base";
import { RuleCondition } from "./base/RuleCondition";
import { RuleConditionService } from "./ruleCondition.service";

@graphql.Resolver(() => RuleCondition)
export class RuleConditionResolver extends RuleConditionResolverBase {
  constructor(protected readonly service: RuleConditionService) {
    super(service);
  }
}
