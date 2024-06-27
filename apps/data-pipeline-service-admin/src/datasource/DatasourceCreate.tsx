import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DatasourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="connectionString" source="connectionString" />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
