import { SolarInstallationWhereInput } from "./SolarInstallationWhereInput";
import { SolarInstallationOrderByInput } from "./SolarInstallationOrderByInput";

export type SolarInstallationFindManyArgs = {
  where?: SolarInstallationWhereInput;
  orderBy?: Array<SolarInstallationOrderByInput>;
  skip?: number;
  take?: number;
};
