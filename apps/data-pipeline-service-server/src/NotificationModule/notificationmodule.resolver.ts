import * as graphql from "@nestjs/graphql";
import { NotificationInput } from "../notificationModule/NotificationInput";
import { NotificationModuleService } from "./notificationmodule.service";

export class NotificationModuleResolver {
  constructor(protected readonly service: NotificationModuleService) {}

  @graphql.Mutation(() => String)
  async SendSlackNotification(
    @graphql.Args()
    args: NotificationInput
  ): Promise<string> {
    return this.service.SendSlackNotification(args);
  }
}
