import { Rule as TRule } from "../api/rule/Rule";

export const RULE_TITLE_FIELD = "name";

export const RuleTitle = (record: TRule): string => {
  return record.name?.toString() || String(record.id);
};
