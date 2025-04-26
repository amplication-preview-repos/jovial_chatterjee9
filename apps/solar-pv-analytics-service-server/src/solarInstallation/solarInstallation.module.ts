import { Module } from "@nestjs/common";
import { SolarInstallationModuleBase } from "./base/solarInstallation.module.base";
import { SolarInstallationService } from "./solarInstallation.service";
import { SolarInstallationController } from "./solarInstallation.controller";
import { SolarInstallationResolver } from "./solarInstallation.resolver";

@Module({
  imports: [SolarInstallationModuleBase],
  controllers: [SolarInstallationController],
  providers: [SolarInstallationService, SolarInstallationResolver],
  exports: [SolarInstallationService],
})
export class SolarInstallationModule {}
