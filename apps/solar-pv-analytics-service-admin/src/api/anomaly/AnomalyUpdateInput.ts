import { StringModelWhereUniqueInput } from "../stringModel/StringModelWhereUniqueInput";

export type AnomalyUpdateInput = {
  description?: string | null;
  detectedAt?: Date | null;
  severity?: "Option1" | null;
  stringField?: StringModelWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
