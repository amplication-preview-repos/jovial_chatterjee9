import * as graphql from "@nestjs/graphql";
import { SolarInstallationResolverBase } from "./base/solarInstallation.resolver.base";
import { SolarInstallation } from "./base/SolarInstallation";
import { SolarInstallationService } from "./solarInstallation.service";

@graphql.Resolver(() => SolarInstallation)
export class SolarInstallationResolver extends SolarInstallationResolverBase {
  constructor(protected readonly service: SolarInstallationService) {
    super(service);
  }
}
