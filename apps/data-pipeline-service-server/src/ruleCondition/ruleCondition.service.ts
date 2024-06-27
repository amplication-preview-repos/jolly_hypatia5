import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RuleConditionServiceBase } from "./base/ruleCondition.service.base";

@Injectable()
export class RuleConditionService extends RuleConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
