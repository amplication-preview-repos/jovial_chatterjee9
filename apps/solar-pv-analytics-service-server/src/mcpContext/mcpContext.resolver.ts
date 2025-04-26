import * as graphql from "@nestjs/graphql";
import { McpContextResolverBase } from "./base/mcpContext.resolver.base";
import { McpContext } from "./base/McpContext";
import { McpContextService } from "./mcpContext.service";

@graphql.Resolver(() => McpContext)
export class McpContextResolver extends McpContextResolverBase {
  constructor(protected readonly service: McpContextService) {
    super(service);
  }
}
