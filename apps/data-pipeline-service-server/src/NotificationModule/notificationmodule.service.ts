import { Injectable } from "@nestjs/common";
import { NotificationInput } from "../notificationModule/NotificationInput";

@Injectable()
export class NotificationModuleService {
  constructor() {}
  async SendSlackNotification(args: NotificationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
