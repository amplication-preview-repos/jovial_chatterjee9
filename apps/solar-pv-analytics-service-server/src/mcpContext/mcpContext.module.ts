import { Module } from "@nestjs/common";
import { McpContextModuleBase } from "./base/mcpContext.module.base";
import { McpContextService } from "./mcpContext.service";
import { McpContextController } from "./mcpContext.controller";
import { McpContextResolver } from "./mcpContext.resolver";

@Module({
  imports: [McpContextModuleBase],
  controllers: [McpContextController],
  providers: [McpContextService, McpContextResolver],
  exports: [McpContextService],
})
export class McpContextModule {}
