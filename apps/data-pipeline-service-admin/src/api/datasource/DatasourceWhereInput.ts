import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DatasourceWhereInput = {
  connectionString?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
