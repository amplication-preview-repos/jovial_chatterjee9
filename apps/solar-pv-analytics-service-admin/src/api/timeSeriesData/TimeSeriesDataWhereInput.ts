import { StringFilter } from "../../util/StringFilter";
import { StringModelWhereUniqueInput } from "../stringModel/StringModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TimeSeriesDataWhereInput = {
  id?: StringFilter;
  metricType?: "Option1";
  stringField?: StringModelWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
