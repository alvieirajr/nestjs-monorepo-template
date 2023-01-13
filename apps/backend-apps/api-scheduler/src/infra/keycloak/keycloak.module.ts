import { Global, Module } from '@nestjs/common';
import { KeycloakConfigService } from './services/keycloak.services';

@Global()
@Module({
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})

export class KeycloakConfigModule {}