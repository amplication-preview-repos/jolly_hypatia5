/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RuleConditionService } from "../ruleCondition.service";
import { RuleConditionCreateInput } from "./RuleConditionCreateInput";
import { RuleCondition } from "./RuleCondition";
import { RuleConditionFindManyArgs } from "./RuleConditionFindManyArgs";
import { RuleConditionWhereUniqueInput } from "./RuleConditionWhereUniqueInput";
import { RuleConditionUpdateInput } from "./RuleConditionUpdateInput";

export class RuleConditionControllerBase {
  constructor(protected readonly service: RuleConditionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RuleCondition })
  async createRuleCondition(
    @common.Body() data: RuleConditionCreateInput
  ): Promise<RuleCondition> {
    return await this.service.createRuleCondition({
      data: data,
      select: {
        createdAt: true,
        fieldField: true,
        id: true,
        operator: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RuleCondition] })
  @ApiNestedQuery(RuleConditionFindManyArgs)
  async ruleConditions(
    @common.Req() request: Request
  ): Promise<RuleCondition[]> {
    const args = plainToClass(RuleConditionFindManyArgs, request.query);
    return this.service.ruleConditions({
      ...args,
      select: {
        createdAt: true,
        fieldField: true,
        id: true,
        operator: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RuleCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ruleCondition(
    @common.Param() params: RuleConditionWhereUniqueInput
  ): Promise<RuleCondition | null> {
    const result = await this.service.ruleCondition({
      where: params,
      select: {
        createdAt: true,
        fieldField: true,
        id: true,
        operator: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RuleCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRuleCondition(
    @common.Param() params: RuleConditionWhereUniqueInput,
    @common.Body() data: RuleConditionUpdateInput
  ): Promise<RuleCondition | null> {
    try {
      return await this.service.updateRuleCondition({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fieldField: true,
          id: true,
          operator: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RuleCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRuleCondition(
    @common.Param() params: RuleConditionWhereUniqueInput
  ): Promise<RuleCondition | null> {
    try {
      return await this.service.deleteRuleCondition({
        where: params,
        select: {
          createdAt: true,
          fieldField: true,
          id: true,
          operator: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
