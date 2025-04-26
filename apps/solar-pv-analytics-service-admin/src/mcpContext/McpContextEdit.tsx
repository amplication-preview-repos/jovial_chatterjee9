import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const McpContextEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contextName" source="contextName" />
        <DateTimeInput label="lastRunAt" source="lastRunAt" />
        <TextInput label="modelType" source="modelType" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
