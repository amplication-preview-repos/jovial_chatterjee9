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

import { INVERTER_TITLE_FIELD } from "./InverterTitle";
import { SOLARINSTALLATION_TITLE_FIELD } from "../solarInstallation/SolarInstallationTitle";

export const InverterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="model" source="model" />
        <TextField label="serialNumber" source="serialNumber" />
        <ReferenceField
          label="SolarInstallation"
          source="solarinstallation.id"
          reference="SolarInstallation"
        >
          <TextField source={SOLARINSTALLATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="StringModel"
          target="inverterId"
          label="Strings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
