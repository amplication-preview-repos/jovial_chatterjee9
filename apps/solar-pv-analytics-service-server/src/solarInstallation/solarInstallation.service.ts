import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SolarInstallationServiceBase } from "./base/solarInstallation.service.base";

@Injectable()
export class SolarInstallationService extends SolarInstallationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
