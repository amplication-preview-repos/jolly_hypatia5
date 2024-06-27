import { Module } from "@nestjs/common";
import { NotificationModuleService } from "./notificationmodule.service";
import { NotificationModuleController } from "./notificationmodule.controller";
import { NotificationModuleResolver } from "./notificationmodule.resolver";

@Module({
  controllers: [NotificationModuleController],
  providers: [NotificationModuleService, NotificationModuleResolver],
  exports: [NotificationModuleService],
})
export class NotificationModuleModule {}
