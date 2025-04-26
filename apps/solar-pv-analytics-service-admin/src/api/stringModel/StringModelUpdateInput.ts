import { AnomalyUpdateManyWithoutStringModelsInput } from "./AnomalyUpdateManyWithoutStringModelsInput";
import { InverterWhereUniqueInput } from "../inverter/InverterWhereUniqueInput";
import { TimeSeriesDataUpdateManyWithoutStringModelsInput } from "./TimeSeriesDataUpdateManyWithoutStringModelsInput";

export type StringModelUpdateInput = {
  anomalies?: AnomalyUpdateManyWithoutStringModelsInput;
  identifier?: string | null;
  inverter?: InverterWhereUniqueInput | null;
  timeSeriesDataItems?: TimeSeriesDataUpdateManyWithoutStringModelsInput;
};
