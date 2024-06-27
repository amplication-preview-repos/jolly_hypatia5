import { Datasource as TDatasource } from "../api/datasource/Datasource";

export const DATASOURCE_TITLE_FIELD = "name";

export const DatasourceTitle = (record: TDatasource): string => {
  return record.name?.toString() || String(record.id);
};
