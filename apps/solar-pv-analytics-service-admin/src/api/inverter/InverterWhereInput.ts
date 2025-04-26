import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SolarInstallationWhereUniqueInput } from "../solarInstallation/SolarInstallationWhereUniqueInput";
import { StringModelListRelationFilter } from "../stringModel/StringModelListRelationFilter";

export type InverterWhereInput = {
  id?: StringFilter;
  model?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
  solarInstallation?: SolarInstallationWhereUniqueInput;
  strings?: StringModelListRelationFilter;
};
