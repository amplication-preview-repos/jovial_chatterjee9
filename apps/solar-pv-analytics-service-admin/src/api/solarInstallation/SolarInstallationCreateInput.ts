import { InverterCreateNestedManyWithoutSolarInstallationsInput } from "./InverterCreateNestedManyWithoutSolarInstallationsInput";

export type SolarInstallationCreateInput = {
  installedAt?: Date | null;
  inverters?: InverterCreateNestedManyWithoutSolarInstallationsInput;
  location?: string | null;
  name?: string | null;
};
