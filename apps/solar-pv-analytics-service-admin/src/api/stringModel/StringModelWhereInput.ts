import { AnomalyListRelationFilter } from "../anomaly/AnomalyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InverterWhereUniqueInput } from "../inverter/InverterWhereUniqueInput";
import { TimeSeriesDataListRelationFilter } from "../timeSeriesData/TimeSeriesDataListRelationFilter";

export type StringModelWhereInput = {
  anomalies?: AnomalyListRelationFilter;
  id?: StringFilter;
  identifier?: StringNullableFilter;
  inverter?: InverterWhereUniqueInput;
  timeSeriesDataItems?: TimeSeriesDataListRelationFilter;
};
