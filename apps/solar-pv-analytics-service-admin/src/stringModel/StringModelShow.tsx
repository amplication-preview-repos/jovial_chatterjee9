import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STRINGMODEL_TITLE_FIELD } from "./StringModelTitle";
import { INVERTER_TITLE_FIELD } from "../inverter/InverterTitle";

export const StringModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <ReferenceField
          label="Inverter"
          source="inverter.id"
          reference="Inverter"
        >
          <TextField source={INVERTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Anomaly"
          target="stringFieldId"
          label="Anomalies"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeSeriesData"
          target="stringFieldId"
          label="TimeSeriesDataItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="metricType" source="metricType" />
            <ReferenceField
              label="String"
              source="stringmodel.id"
              reference="StringModel"
            >
              <TextField source={STRINGMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
