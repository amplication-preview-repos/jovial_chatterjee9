import { SortOrder } from "../../util/SortOrder";

export type AnomalyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  detectedAt?: SortOrder;
  id?: SortOrder;
  severity?: SortOrder;
  stringFieldId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
