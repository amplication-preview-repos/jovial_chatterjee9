import { Module } from "@nestjs/common";
import { StringModelModuleBase } from "./base/stringModel.module.base";
import { StringModelService } from "./stringModel.service";
import { StringModelController } from "./stringModel.controller";
import { StringModelResolver } from "./stringModel.resolver";

@Module({
  imports: [StringModelModuleBase],
  controllers: [StringModelController],
  providers: [StringModelService, StringModelResolver],
  exports: [StringModelService],
})
export class StringModelModule {}
