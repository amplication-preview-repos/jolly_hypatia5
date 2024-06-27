import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
