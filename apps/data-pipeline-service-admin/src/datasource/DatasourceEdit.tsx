import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DatasourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="connectionString" source="connectionString" />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
