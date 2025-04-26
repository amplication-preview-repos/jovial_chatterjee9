import * as graphql from "@nestjs/graphql";
import { TimeSeriesDataResolverBase } from "./base/timeSeriesData.resolver.base";
import { TimeSeriesData } from "./base/TimeSeriesData";
import { TimeSeriesDataService } from "./timeSeriesData.service";

@graphql.Resolver(() => TimeSeriesData)
export class TimeSeriesDataResolver extends TimeSeriesDataResolverBase {
  constructor(protected readonly service: TimeSeriesDataService) {
    super(service);
  }
}
