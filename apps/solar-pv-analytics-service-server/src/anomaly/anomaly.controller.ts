import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnomalyService } from "./anomaly.service";
import { AnomalyControllerBase } from "./base/anomaly.controller.base";

@swagger.ApiTags("anomalies")
@common.Controller("anomalies")
export class AnomalyController extends AnomalyControllerBase {
  constructor(protected readonly service: AnomalyService) {
    super(service);
  }
}
