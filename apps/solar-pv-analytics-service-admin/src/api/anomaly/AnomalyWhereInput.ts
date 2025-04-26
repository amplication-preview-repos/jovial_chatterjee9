import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringModelWhereUniqueInput } from "../stringModel/StringModelWhereUniqueInput";

export type AnomalyWhereInput = {
  description?: StringNullableFilter;
  detectedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  severity?: "Option1";
  stringField?: StringModelWhereUniqueInput;
  typeField?: "Option1";
};
