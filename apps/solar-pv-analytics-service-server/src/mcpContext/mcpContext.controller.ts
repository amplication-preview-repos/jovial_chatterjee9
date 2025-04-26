import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { McpContextService } from "./mcpContext.service";
import { McpContextControllerBase } from "./base/mcpContext.controller.base";

@swagger.ApiTags("mcpContexts")
@common.Controller("mcpContexts")
export class McpContextController extends McpContextControllerBase {
  constructor(protected readonly service: McpContextService) {
    super(service);
  }
}
