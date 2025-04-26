import { StringModel } from "../stringModel/StringModel";

export type TimeSeriesData = {
  createdAt: Date;
  id: string;
  metricType?: "Option1" | null;
  stringField?: StringModel | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
