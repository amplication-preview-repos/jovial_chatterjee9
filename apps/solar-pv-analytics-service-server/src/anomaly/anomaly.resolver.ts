import * as graphql from "@nestjs/graphql";
import { AnomalyResolverBase } from "./base/anomaly.resolver.base";
import { Anomaly } from "./base/Anomaly";
import { AnomalyService } from "./anomaly.service";

@graphql.Resolver(() => Anomaly)
export class AnomalyResolver extends AnomalyResolverBase {
  constructor(protected readonly service: AnomalyService) {
    super(service);
  }
}
