import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { McpContextServiceBase } from "./base/mcpContext.service.base";

@Injectable()
export class McpContextService extends McpContextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
