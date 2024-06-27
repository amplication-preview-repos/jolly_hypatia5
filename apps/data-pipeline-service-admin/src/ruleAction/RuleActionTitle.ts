import { RuleAction as TRuleAction } from "../api/ruleAction/RuleAction";

export const RULEACTION_TITLE_FIELD = "typeField";

export const RuleActionTitle = (record: TRuleAction): string => {
  return record.typeField?.toString() || String(record.id);
};
