import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SolarInstallationService } from "./solarInstallation.service";
import { SolarInstallationControllerBase } from "./base/solarInstallation.controller.base";

@swagger.ApiTags("solarInstallations")
@common.Controller("solarInstallations")
export class SolarInstallationController extends SolarInstallationControllerBase {
  constructor(protected readonly service: SolarInstallationService) {
    super(service);
  }
}
