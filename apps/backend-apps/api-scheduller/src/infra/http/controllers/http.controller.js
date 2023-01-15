"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.HttpController = void 0;
var common_1 = require("@nestjs/common");
var nest_keycloak_connect_1 = require("nest-keycloak-connect");
var HttpController = /** @class */ (function () {
    function HttpController(httpService) {
        this.httpService = httpService;
    }
    HttpController.prototype.getpublic = function () {
        return "".concat(this.httpService.getHello(), " from public");
    };
    HttpController.prototype.getUser = function () {
        return "".concat(this.httpService.getHello(), " from user with roles: 'admin' or 'other'");
    };
    HttpController.prototype.getHello = function (user) {
        return this.httpService.getHello();
    };
    HttpController.prototype.getPrivate = function () {
        return 'Authenticated only!';
    };
    HttpController.prototype.adminRole = function () {
        return 'Admin only!';
    };
    __decorate([
        (0, nest_keycloak_connect_1.Unprotected)()
    ], HttpController.prototype, "getpublic");
    __decorate([
        (0, common_1.Get)('/user'),
        (0, nest_keycloak_connect_1.Roles)({ roles: ['admin', 'other'] })
    ], HttpController.prototype, "getUser");
    __decorate([
        (0, common_1.Get)(),
        (0, nest_keycloak_connect_1.Public)(false),
        __param(0, (0, nest_keycloak_connect_1.AuthenticatedUser)())
    ], HttpController.prototype, "getHello");
    __decorate([
        (0, common_1.Get)('private')
    ], HttpController.prototype, "getPrivate");
    __decorate([
        (0, common_1.Get)('admin'),
        (0, nest_keycloak_connect_1.Roles)({ roles: ['admin'], mode: nest_keycloak_connect_1.RoleMatchingMode.ALL })
    ], HttpController.prototype, "adminRole");
    HttpController = __decorate([
        (0, common_1.Controller)()
    ], HttpController);
    return HttpController;
}());
exports.HttpController = HttpController;
