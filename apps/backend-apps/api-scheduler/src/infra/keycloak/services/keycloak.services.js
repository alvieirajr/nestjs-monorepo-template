"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.KeycloakConfigService = void 0;
var common_1 = require("@nestjs/common");
var nest_keycloak_connect_1 = require("nest-keycloak-connect");
var KeycloakConfigService = /** @class */ (function () {
    function KeycloakConfigService() {
    }
    KeycloakConfigService.prototype.createKeycloakConnectOptions = function () {
        return {
            authServerUrl: 'https://keycloakdmz.tce.pe:8443/auth/',
            realm: 'sistemas',
            clientId: 'sisouv',
            secret: 'e94db5fd-0bdb-4315-9ed1-765e917b13b0',
            cookieKey: 'KEYCLOAK_JWT',
            logLevels: ['verbose'],
            useNestLogger: false,
            policyEnforcement: nest_keycloak_connect_1.PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: nest_keycloak_connect_1.TokenValidation.ONLINE
        };
    };
    KeycloakConfigService = __decorate([
        (0, common_1.Injectable)()
    ], KeycloakConfigService);
    return KeycloakConfigService;
}());
exports.KeycloakConfigService = KeycloakConfigService;
