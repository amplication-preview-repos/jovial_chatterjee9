import { StringModelWhereUniqueInput } from "../stringModel/StringModelWhereUniqueInput";

export type TimeSeriesDataCreateInput = {
  metricType?: "Option1" | null;
  stringField?: StringModelWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
