import { AnomalyCreateNestedManyWithoutStringModelsInput } from "./AnomalyCreateNestedManyWithoutStringModelsInput";
import { InverterWhereUniqueInput } from "../inverter/InverterWhereUniqueInput";
import { TimeSeriesDataCreateNestedManyWithoutStringModelsInput } from "./TimeSeriesDataCreateNestedManyWithoutStringModelsInput";

export type StringModelCreateInput = {
  anomalies?: AnomalyCreateNestedManyWithoutStringModelsInput;
  identifier?: string | null;
  inverter?: InverterWhereUniqueInput | null;
  timeSeriesDataItems?: TimeSeriesDataCreateNestedManyWithoutStringModelsInput;
};
