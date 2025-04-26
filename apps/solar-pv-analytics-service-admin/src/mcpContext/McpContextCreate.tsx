import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const McpContextCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contextName" source="contextName" />
        <DateTimeInput label="lastRunAt" source="lastRunAt" />
        <TextInput label="modelType" source="modelType" />
        <div />
      </SimpleForm>
    </Create>
  );
};
