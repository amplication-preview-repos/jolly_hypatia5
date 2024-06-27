import { Module } from "@nestjs/common";
import { DatasourceModule } from "./datasource/datasource.module";
import { RuleModule } from "./rule/rule.module";
import { RuleConditionModule } from "./ruleCondition/ruleCondition.module";
import { RuleActionModule } from "./ruleAction/ruleAction.module";
import { NotificationModule } from "./notification/notification.module";
import { DatasourceModuleModule } from "./DatasourceModule/datasourcemodule.module";
import { NotificationModuleModule } from "./NotificationModule/notificationmodule.module";
import { RuleModuleModule } from "./RuleModule/rulemodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    DatasourceModule,
    RuleModule,
    RuleConditionModule,
    RuleActionModule,
    NotificationModule,
    DatasourceModuleModule,
    NotificationModuleModule,
    RuleModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
