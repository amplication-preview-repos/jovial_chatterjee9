import { SolarInstallationWhereUniqueInput } from "../solarInstallation/SolarInstallationWhereUniqueInput";
import { StringModelUpdateManyWithoutInvertersInput } from "./StringModelUpdateManyWithoutInvertersInput";

export type InverterUpdateInput = {
  model?: string | null;
  serialNumber?: string | null;
  solarInstallation?: SolarInstallationWhereUniqueInput | null;
  strings?: StringModelUpdateManyWithoutInvertersInput;
};
