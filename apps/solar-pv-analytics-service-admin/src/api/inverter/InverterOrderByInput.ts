import { SortOrder } from "../../util/SortOrder";

export type InverterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  serialNumber?: SortOrder;
  solarInstallationId?: SortOrder;
  updatedAt?: SortOrder;
};
