import { JsonValue } from "type-fest";

export type Notification = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
