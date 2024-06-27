import { Injectable } from "@nestjs/common";
import { RuleInput } from "../ruleModule/RuleInput";
import { DataInput } from "../ruleModule/DataInput";

@Injectable()
export class RuleModuleService {
  constructor() {}
  async AddRule(args: RuleInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ApplyRules(args: DataInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
