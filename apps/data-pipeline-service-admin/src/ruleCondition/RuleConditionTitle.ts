import { RuleCondition as TRuleCondition } from "../api/ruleCondition/RuleCondition";

export const RULECONDITION_TITLE_FIELD = "fieldField";

export const RuleConditionTitle = (record: TRuleCondition): string => {
  return record.fieldField?.toString() || String(record.id);
};
