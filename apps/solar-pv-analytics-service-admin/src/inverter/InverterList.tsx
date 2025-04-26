import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SOLARINSTALLATION_TITLE_FIELD } from "../solarInstallation/SolarInstallationTitle";

export const InverterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Inverters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
