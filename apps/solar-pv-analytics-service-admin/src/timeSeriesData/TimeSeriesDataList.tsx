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

export const TimeSeriesDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TimeSeriesDataItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
