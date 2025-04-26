import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnomalyServiceBase } from "./base/anomaly.service.base";

@Injectable()
export class AnomalyService extends AnomalyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
