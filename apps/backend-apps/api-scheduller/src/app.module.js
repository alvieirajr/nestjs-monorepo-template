"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var nest_keycloak_connect_1 = require("nest-keycloak-connect");
var keycloak_module_1 = require("./infra/keycloak/keycloak.module");
var keycloak_services_1 = require("./infra/keycloak/services/keycloak.services");
var http_module_1 = require("./infra/http/http.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                nest_keycloak_connect_1.KeycloakConnectModule.registerAsync({
                    useExisting: keycloak_services_1.KeycloakConfigService,
                    imports: [keycloak_module_1.KeycloakConfigModule]
                }),
                http_module_1.HttpModule
            ],
            providers: [
                {
                    provide: core_1.APP_GUARD,
                    useClass: nest_keycloak_connect_1.AuthGuard
                },
                {
                    provide: core_1.APP_GUARD,
                    useClass: nest_keycloak_connect_1.ResourceGuard
                },
                {
                    provide: core_1.APP_GUARD,
                    useClass: nest_keycloak_connect_1.RoleGuard
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
