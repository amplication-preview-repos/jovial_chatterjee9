import { StringModel as TStringModel } from "../api/stringModel/StringModel";

export const STRINGMODEL_TITLE_FIELD = "identifier";

export const StringModelTitle = (record: TStringModel): string => {
  return record.identifier?.toString() || String(record.id);
};
