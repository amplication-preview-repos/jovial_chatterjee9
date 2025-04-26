import { SolarInstallationWhereUniqueInput } from "../solarInstallation/SolarInstallationWhereUniqueInput";
import { StringModelCreateNestedManyWithoutInvertersInput } from "./StringModelCreateNestedManyWithoutInvertersInput";

export type InverterCreateInput = {
  model?: string | null;
  serialNumber?: string | null;
  solarInstallation?: SolarInstallationWhereUniqueInput | null;
  strings?: StringModelCreateNestedManyWithoutInvertersInput;
};
