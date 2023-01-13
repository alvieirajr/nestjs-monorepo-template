"use strict";
exports.__esModule = true;
exports.GlobalKeyCloakGuard = void 0;
var core_1 = require("@nestjs/core");
var nest_keycloak_connect_1 = require("nest-keycloak-connect");
exports.GlobalKeyCloakGuard = [
    // This adds a global level authentication guard,
    // you can also have it scoped
    // if you like.
    //
    // Will return a 401 unauthorized when it is unable to
    // verify the JWT token or Bearer header is missing.
    {
        provide: core_1.APP_GUARD,
        useClass: nest_keycloak_connect_1.AuthGuard
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and
    // methods with @Scopes
    // are handled by this guard.
    {
        provide: core_1.APP_GUARD,
        useClass: nest_keycloak_connect_1.ResourceGuard
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the
    // optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
        provide: core_1.APP_GUARD,
        useClass: nest_keycloak_connect_1.RoleGuard
    },
];
