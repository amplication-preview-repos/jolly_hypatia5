import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationModuleService } from "./notificationmodule.service";
import { NotificationInput } from "../notificationModule/NotificationInput";

@swagger.ApiTags("notificationModules")
@common.Controller("notificationModules")
export class NotificationModuleController {
  constructor(protected readonly service: NotificationModuleService) {}

  @common.Post("/send-slack-notification")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendSlackNotification(
    @common.Body()
    body: NotificationInput
  ): Promise<string> {
        return this.service.SendSlackNotification(body);
      }
}
