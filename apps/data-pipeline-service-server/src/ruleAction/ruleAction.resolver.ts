import * as graphql from "@nestjs/graphql";
import { RuleActionResolverBase } from "./base/ruleAction.resolver.base";
import { RuleAction } from "./base/RuleAction";
import { RuleActionService } from "./ruleAction.service";

@graphql.Resolver(() => RuleAction)
export class RuleActionResolver extends RuleActionResolverBase {
  constructor(protected readonly service: RuleActionService) {
    super(service);
  }
}
