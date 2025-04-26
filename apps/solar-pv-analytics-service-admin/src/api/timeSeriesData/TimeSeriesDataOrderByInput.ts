import { SortOrder } from "../../util/SortOrder";

export type TimeSeriesDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  metricType?: SortOrder;
  stringFieldId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
