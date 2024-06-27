import { Module } from "@nestjs/common";
import { DatasourceModuleService } from "./datasourcemodule.service";
import { DatasourceModuleController } from "./datasourcemodule.controller";
import { DatasourceModuleResolver } from "./datasourcemodule.resolver";

@Module({
  controllers: [DatasourceModuleController],
  providers: [DatasourceModuleService, DatasourceModuleResolver],
  exports: [DatasourceModuleService],
})
export class DatasourceModuleModule {}
