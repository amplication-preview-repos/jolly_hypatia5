import { RuleConditionWhereInput } from "./RuleConditionWhereInput";
import { RuleConditionOrderByInput } from "./RuleConditionOrderByInput";

export type RuleConditionFindManyArgs = {
  where?: RuleConditionWhereInput;
  orderBy?: Array<RuleConditionOrderByInput>;
  skip?: number;
  take?: number;
};
