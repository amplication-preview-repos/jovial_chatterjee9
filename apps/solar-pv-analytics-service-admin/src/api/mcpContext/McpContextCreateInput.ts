import { InputJsonValue } from "../../types";

export type McpContextCreateInput = {
  contextName?: string | null;
  lastRunAt?: Date | null;
  modelType?: string | null;
  parameters?: InputJsonValue;
};
