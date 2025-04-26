import { Anomaly as TAnomaly } from "../api/anomaly/Anomaly";

export const ANOMALY_TITLE_FIELD = "id";

export const AnomalyTitle = (record: TAnomaly): string => {
  return record.id?.toString() || String(record.id);
};
