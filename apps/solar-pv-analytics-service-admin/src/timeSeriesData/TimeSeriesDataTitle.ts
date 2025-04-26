import { TimeSeriesData as TTimeSeriesData } from "../api/timeSeriesData/TimeSeriesData";

export const TIMESERIESDATA_TITLE_FIELD = "id";

export const TimeSeriesDataTitle = (record: TTimeSeriesData): string => {
  return record.id?.toString() || String(record.id);
};
