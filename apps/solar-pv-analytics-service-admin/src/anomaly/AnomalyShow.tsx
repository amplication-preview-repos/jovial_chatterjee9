import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { STRINGMODEL_TITLE_FIELD } from "../stringModel/StringModelTitle";

export const AnomalyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="detectedAt" source="detectedAt" />
        <TextField label="ID" source="id" />
        <TextField label="severity" source="severity" />
        <ReferenceField
          label="String"
          source="stringmodel.id"
          reference="StringModel"
        >
          <TextField source={STRINGMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
