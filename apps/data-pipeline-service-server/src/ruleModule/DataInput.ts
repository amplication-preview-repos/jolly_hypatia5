import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class DataInput {
    @Field(() => [GraphQLJSON])
    data!: InputJsonValue;
}

export { DataInput as DataInput };