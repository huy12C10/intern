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
exports.AuthController = void 0;
// auth.controller.ts
var customize_1 = require("@/decorator/customize");
var common_1 = require("@nestjs/common");
var local_auth_guard_1 = require("./passport/local-auth.guard");
var AuthController = /** @class */ (function () {
    function AuthController(authService, mailerService) {
        this.authService = authService;
        this.mailerService = mailerService;
    }
    AuthController.prototype.handleLogin = function (req) {
        return this.authService.login(req.user);
    };
    AuthController.prototype.register = function (registerDto) {
        return this.authService.handleRegister(registerDto);
    };
    AuthController.prototype.checkCode = function (registerDto) {
        return this.authService.checkCode(registerDto);
    };
    AuthController.prototype.retryActive = function (email) {
        return this.authService.retryActive(email);
    };
    AuthController.prototype.changePassword = function (data) {
        return this.authService.changePassword(data);
    };
    AuthController.prototype.testMail = function () {
        this.mailerService
            .sendMail({
            to: 'tuanhuyanime@gmail.com',
            subject: 'Testing Nest MailerModule ✔',
            text: 'welcome',
            template: "register",
            context: {
                name: "huy",
                activationCode: 123456789
            }
        });
        return "ok";
    };
    __decorate([
        common_1.Post("login"),
        customize_1.Public(),
        common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
        customize_1.ResponseMessage("Fetch login"),
        __param(0, common_1.Request())
    ], AuthController.prototype, "handleLogin");
    __decorate([
        common_1.Post('register'),
        customize_1.Public(),
        __param(0, common_1.Body())
    ], AuthController.prototype, "register");
    __decorate([
        common_1.Post('check-code'),
        customize_1.Public(),
        __param(0, common_1.Body())
    ], AuthController.prototype, "checkCode");
    __decorate([
        common_1.Post('retry-active'),
        customize_1.Public(),
        __param(0, common_1.Body("email"))
    ], AuthController.prototype, "retryActive");
    __decorate([
        common_1.Post('change-password'),
        customize_1.Public(),
        __param(0, common_1.Body())
    ], AuthController.prototype, "changePassword");
    __decorate([
        common_1.Get('mail'),
        customize_1.Public()
    ], AuthController.prototype, "testMail");
    AuthController = __decorate([
        common_1.Controller('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
