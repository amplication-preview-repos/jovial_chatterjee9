import { SolarInstallation } from "../solarInstallation/SolarInstallation";
import { StringModel } from "../stringModel/StringModel";

export type Inverter = {
  createdAt: Date;
  id: string;
  model: string | null;
  serialNumber: string | null;
  solarInstallation?: SolarInstallation | null;
  strings?: Array<StringModel>;
  updatedAt: Date;
};
