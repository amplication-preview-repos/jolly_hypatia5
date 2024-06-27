import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RuleConditionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="field" source="fieldField" />
        <TextInput label="operator" source="operator" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
