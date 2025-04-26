import { Module } from "@nestjs/common";
import { AnomalyModuleBase } from "./base/anomaly.module.base";
import { AnomalyService } from "./anomaly.service";
import { AnomalyController } from "./anomaly.controller";
import { AnomalyResolver } from "./anomaly.resolver";

@Module({
  imports: [AnomalyModuleBase],
  controllers: [AnomalyController],
  providers: [AnomalyService, AnomalyResolver],
  exports: [AnomalyService],
})
export class AnomalyModule {}
