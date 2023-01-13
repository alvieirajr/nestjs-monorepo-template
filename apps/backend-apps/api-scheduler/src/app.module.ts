import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard, KeycloakConnectModule,
  ResourceGuard,
  RoleGuard
} from 'nest-keycloak-connect';
import { KeycloakConfigModule } from './infra/keycloak/keycloak.module';
import { KeycloakConfigService } from './infra/keycloak/services/keycloak.services';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakConfigModule]
    })
    , HttpModule],
    providers: [
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
      {
        provide: APP_GUARD,
        useClass: ResourceGuard,
      },
      {
        provide: APP_GUARD,
        useClass: RoleGuard,
      },
    ],
})
export class AppModule {}
