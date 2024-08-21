"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangePasswordAuthDto = exports.CodeAuthDto = exports.CreateAuthDto = void 0;
// create-auth.dto.ts
var class_validator_1 = require("class-validator");
var CreateAuthDto = /** @class */ (function () {
    function CreateAuthDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty({ message: "email không được để trống" })
    ], CreateAuthDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty({ message: "password không được để trống" })
    ], CreateAuthDto.prototype, "password");
    __decorate([
        class_validator_1.IsOptional()
    ], CreateAuthDto.prototype, "name");
    return CreateAuthDto;
}());
exports.CreateAuthDto = CreateAuthDto;
var CodeAuthDto = /** @class */ (function () {
    function CodeAuthDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty({ message: "_id không được để trống" })
    ], CodeAuthDto.prototype, "_id");
    __decorate([
        class_validator_1.IsNotEmpty({ message: "code không được để trống" })
    ], CodeAuthDto.prototype, "code");
    return CodeAuthDto;
}());
exports.CodeAuthDto = CodeAuthDto;
var ChangePasswordAuthDto = /** @class */ (function () {
    function ChangePasswordAuthDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty({ message: "code không được để trống" })
    ], ChangePasswordAuthDto.prototype, "code");
    __decorate([
        class_validator_1.IsNotEmpty({ message: "password không được để trống" })
    ], ChangePasswordAuthDto.prototype, "password");
    __decorate([
        class_validator_1.IsNotEmpty({ message: "confirmPassword không được để trống" })
    ], ChangePasswordAuthDto.prototype, "confirmPassword");
    __decorate([
        class_validator_1.IsNotEmpty({ message: "email không được để trống" })
    ], ChangePasswordAuthDto.prototype, "email");
    return ChangePasswordAuthDto;
}());
exports.ChangePasswordAuthDto = ChangePasswordAuthDto;
