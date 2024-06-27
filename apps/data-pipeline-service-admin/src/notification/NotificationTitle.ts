import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "typeField";

export const NotificationTitle = (record: TNotification): string => {
  return record.typeField?.toString() || String(record.id);
};
