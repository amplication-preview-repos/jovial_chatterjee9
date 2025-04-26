import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StringModelService } from "./stringModel.service";
import { StringModelControllerBase } from "./base/stringModel.controller.base";

@swagger.ApiTags("stringModels")
@common.Controller("stringModels")
export class StringModelController extends StringModelControllerBase {
  constructor(protected readonly service: StringModelService) {
    super(service);
  }
}
