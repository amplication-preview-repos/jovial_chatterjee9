import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeSeriesDataServiceBase } from "./base/timeSeriesData.service.base";

@Injectable()
export class TimeSeriesDataService extends TimeSeriesDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
