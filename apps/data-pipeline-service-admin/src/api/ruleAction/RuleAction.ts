import { JsonValue } from "type-fest";

export type RuleAction = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
