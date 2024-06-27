import { RuleActionWhereInput } from "./RuleActionWhereInput";
import { RuleActionOrderByInput } from "./RuleActionOrderByInput";

export type RuleActionFindManyArgs = {
  where?: RuleActionWhereInput;
  orderBy?: Array<RuleActionOrderByInput>;
  skip?: number;
  take?: number;
};
