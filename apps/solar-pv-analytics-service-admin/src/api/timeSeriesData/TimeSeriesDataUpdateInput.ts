import { StringModelWhereUniqueInput } from "../stringModel/StringModelWhereUniqueInput";

export type TimeSeriesDataUpdateInput = {
  metricType?: "Option1" | null;
  stringField?: StringModelWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
