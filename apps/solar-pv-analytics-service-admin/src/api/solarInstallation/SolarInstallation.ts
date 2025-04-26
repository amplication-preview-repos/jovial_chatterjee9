import { Inverter } from "../inverter/Inverter";

export type SolarInstallation = {
  createdAt: Date;
  id: string;
  installedAt: Date | null;
  inverters?: Array<Inverter>;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
