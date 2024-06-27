import { SortOrder } from "../../util/SortOrder";

export type DatasourceOrderByInput = {
  connectionString?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
