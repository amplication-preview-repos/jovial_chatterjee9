import { InputJsonValue } from "../../types";

export type McpContextUpdateInput = {
  contextName?: string | null;
  lastRunAt?: Date | null;
  modelType?: string | null;
  parameters?: InputJsonValue;
};
