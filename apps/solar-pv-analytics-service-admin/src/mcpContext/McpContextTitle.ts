import { McpContext as TMcpContext } from "../api/mcpContext/McpContext";

export const MCPCONTEXT_TITLE_FIELD = "contextName";

export const McpContextTitle = (record: TMcpContext): string => {
  return record.contextName?.toString() || String(record.id);
};
