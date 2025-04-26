import * as graphql from "@nestjs/graphql";
import { StringModelResolverBase } from "./base/stringModel.resolver.base";
import { StringModel } from "./base/StringModel";
import { StringModelService } from "./stringModel.service";

@graphql.Resolver(() => StringModel)
export class StringModelResolver extends StringModelResolverBase {
  constructor(protected readonly service: StringModelService) {
    super(service);
  }
}
