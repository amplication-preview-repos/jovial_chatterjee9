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
import { STRINGMODEL_TITLE_FIELD } from "../stringModel/StringModelTitle";

export const AnomalyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Anomalies"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
