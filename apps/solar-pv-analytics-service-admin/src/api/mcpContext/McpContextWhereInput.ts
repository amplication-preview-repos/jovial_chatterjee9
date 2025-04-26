import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type McpContextWhereInput = {
  contextName?: StringNullableFilter;
  id?: StringFilter;
  lastRunAt?: DateTimeNullableFilter;
  modelType?: StringNullableFilter;
  parameters?: JsonFilter;
};
