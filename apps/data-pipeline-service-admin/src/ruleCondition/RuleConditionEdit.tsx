import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RuleConditionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="field" source="fieldField" />
        <TextInput label="operator" source="operator" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
