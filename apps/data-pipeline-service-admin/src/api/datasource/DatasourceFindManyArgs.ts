import { DatasourceWhereInput } from "./DatasourceWhereInput";
import { DatasourceOrderByInput } from "./DatasourceOrderByInput";

export type DatasourceFindManyArgs = {
  where?: DatasourceWhereInput;
  orderBy?: Array<DatasourceOrderByInput>;
  skip?: number;
  take?: number;
};
