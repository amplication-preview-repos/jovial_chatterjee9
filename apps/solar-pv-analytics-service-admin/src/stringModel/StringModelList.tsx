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
import { INVERTER_TITLE_FIELD } from "../inverter/InverterTitle";

export const StringModelList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Strings"} perPage={50} pagination={<Pagination />}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
