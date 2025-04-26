import { Module } from "@nestjs/common";
import { TimeSeriesDataModuleBase } from "./base/timeSeriesData.module.base";
import { TimeSeriesDataService } from "./timeSeriesData.service";
import { TimeSeriesDataController } from "./timeSeriesData.controller";
import { TimeSeriesDataResolver } from "./timeSeriesData.resolver";

@Module({
  imports: [TimeSeriesDataModuleBase],
  controllers: [TimeSeriesDataController],
  providers: [TimeSeriesDataService, TimeSeriesDataResolver],
  exports: [TimeSeriesDataService],
})
export class TimeSeriesDataModule {}
