import { SolarInstallation as TSolarInstallation } from "../api/solarInstallation/SolarInstallation";

export const SOLARINSTALLATION_TITLE_FIELD = "name";

export const SolarInstallationTitle = (record: TSolarInstallation): string => {
  return record.name?.toString() || String(record.id);
};
