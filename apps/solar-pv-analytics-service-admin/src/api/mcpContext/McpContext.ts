import { JsonValue } from "type-fest";

export type McpContext = {
  contextName: string | null;
  createdAt: Date;
  id: string;
  lastRunAt: Date | null;
  modelType: string | null;
  parameters: JsonValue;
  updatedAt: Date;
};
