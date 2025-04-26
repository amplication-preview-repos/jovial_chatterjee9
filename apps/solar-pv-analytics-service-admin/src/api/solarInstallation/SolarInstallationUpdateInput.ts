import { InverterUpdateManyWithoutSolarInstallationsInput } from "./InverterUpdateManyWithoutSolarInstallationsInput";

export type SolarInstallationUpdateInput = {
  installedAt?: Date | null;
  inverters?: InverterUpdateManyWithoutSolarInstallationsInput;
  location?: string | null;
  name?: string | null;
};
