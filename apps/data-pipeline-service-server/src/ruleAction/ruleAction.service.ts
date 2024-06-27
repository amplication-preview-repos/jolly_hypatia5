import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RuleActionServiceBase } from "./base/ruleAction.service.base";

@Injectable()
export class RuleActionService extends RuleActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
