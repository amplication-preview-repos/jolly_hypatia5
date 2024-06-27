import { Module } from "@nestjs/common";
import { DatasourceModuleBase } from "./base/datasource.module.base";
import { DatasourceService } from "./datasource.service";
import { DatasourceController } from "./datasource.controller";
import { DatasourceResolver } from "./datasource.resolver";

@Module({
  imports: [DatasourceModuleBase],
  controllers: [DatasourceController],
  providers: [DatasourceService, DatasourceResolver],
  exports: [DatasourceService],
})
export class DatasourceModule {}
