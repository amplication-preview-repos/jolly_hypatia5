import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RuleActionWhereInput = {
  details?: JsonFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
