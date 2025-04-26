import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const McpContextList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MCPContexts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contextName" source="contextName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastRunAt" source="lastRunAt" />
        <TextField label="modelType" source="modelType" />
        <TextField label="parameters" source="parameters" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
