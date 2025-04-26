import { Anomaly } from "../anomaly/Anomaly";
import { Inverter } from "../inverter/Inverter";
import { TimeSeriesData } from "../timeSeriesData/TimeSeriesData";

export type StringModel = {
  anomalies?: Array<Anomaly>;
  createdAt: Date;
  id: string;
  identifier: string | null;
  inverter?: Inverter | null;
  timeSeriesDataItems?: Array<TimeSeriesData>;
  updatedAt: Date;
};
