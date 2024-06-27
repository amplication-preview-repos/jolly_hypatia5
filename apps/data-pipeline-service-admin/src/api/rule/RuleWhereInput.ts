import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RuleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
