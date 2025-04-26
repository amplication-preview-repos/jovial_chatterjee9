import { SortOrder } from "../../util/SortOrder";

export type McpContextOrderByInput = {
  contextName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastRunAt?: SortOrder;
  modelType?: SortOrder;
  parameters?: SortOrder;
  updatedAt?: SortOrder;
};
