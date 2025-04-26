import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { InverterListRelationFilter } from "../inverter/InverterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SolarInstallationWhereInput = {
  id?: StringFilter;
  installedAt?: DateTimeNullableFilter;
  inverters?: InverterListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
