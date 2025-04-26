import { StringModel } from "../stringModel/StringModel";

export type Anomaly = {
  createdAt: Date;
  description: string | null;
  detectedAt: Date | null;
  id: string;
  severity?: "Option1" | null;
  stringField?: StringModel | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
