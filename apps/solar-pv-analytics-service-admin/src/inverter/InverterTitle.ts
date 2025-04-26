import { Inverter as TInverter } from "../api/inverter/Inverter";

export const INVERTER_TITLE_FIELD = "model";

export const InverterTitle = (record: TInverter): string => {
  return record.model?.toString() || String(record.id);
};
