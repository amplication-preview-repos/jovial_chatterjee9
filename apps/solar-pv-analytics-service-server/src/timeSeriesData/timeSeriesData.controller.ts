import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeSeriesDataService } from "./timeSeriesData.service";
import { TimeSeriesDataControllerBase } from "./base/timeSeriesData.controller.base";

@swagger.ApiTags("timeSeriesData")
@common.Controller("timeSeriesData")
export class TimeSeriesDataController extends TimeSeriesDataControllerBase {
  constructor(protected readonly service: TimeSeriesDataService) {
    super(service);
  }
}
