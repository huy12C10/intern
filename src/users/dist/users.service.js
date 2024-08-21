"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersService = void 0;
var utils_1 = require("@/hashPassword/utils");
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var dayjs_1 = require("dayjs");
var mongoose_2 = require("mongoose");
var uuid_1 = require("uuid");
var user_schema_1 = require("./schemas/user.schema");
var UsersService = /** @class */ (function () {
    function UsersService(userModel, mailerService) {
        var _this = this;
        this.userModel = userModel;
        this.mailerService = mailerService;
        this.isEmailExist = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.exists({ email: email })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, !!user];
                }
            });
        }); };
    }
    UsersService.prototype.create = function (createUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var name, email, password, isExist, hashedPassword, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = createUserDto.name, email = createUserDto.email, password = createUserDto.password;
                        return [4 /*yield*/, this.isEmailExist(email)];
                    case 1:
                        isExist = _a.sent();
                        if (isExist) {
                            throw new common_1.BadRequestException("Email \u0111\u00E3 t\u1ED3n t\u1EA1i: " + email);
                        }
                        return [4 /*yield*/, utils_1.hashPasswordHelper(password)];
                    case 2:
                        hashedPassword = _a.sent();
                        return [4 /*yield*/, this.userModel.create({
                                name: name,
                                email: email,
                                password: hashedPassword
                            })];
                    case 3:
                        user = _a.sent();
                        return [2 /*return*/, {
                                _id: user._id
                            }];
                }
            });
        });
    };
    UsersService.prototype.findAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userModel.find().exec()];
            });
        });
    };
    UsersService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userModel.findById(id).exec()];
            });
        });
    };
    UsersService.prototype.update = function (updateUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, email, isExist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = updateUserDto._id, email = updateUserDto.email;
                        if (!email) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isEmailExist(email)];
                    case 1:
                        isExist = _a.sent();
                        if (isExist) {
                            throw new common_1.BadRequestException("Email \u0111\u00E3 t\u1ED3n t\u1EA1i: " + email);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.userModel.updateOne({ _id: _id }, __assign({}, updateUserDto))];
                }
            });
        });
    };
    UsersService.prototype.remove = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!mongoose_2["default"].isValidObjectId(_id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userModel.deleteOne({ _id: _id })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: throw new common_1.BadRequestException('ID không hợp lệ');
                }
            });
        });
    };
    UsersService.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.findOne({ email: email }).exec()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.handleRegister = function (registerDto) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var name, email, password, isExist, hashedPassword, codeId, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        name = registerDto.name, email = registerDto.email, password = registerDto.password;
                        return [4 /*yield*/, this.isEmailExist(email)];
                    case 1:
                        isExist = _b.sent();
                        if (isExist) {
                            throw new common_1.BadRequestException("Email \u0111\u00E3 t\u1ED3n t\u1EA1i: " + email);
                        }
                        return [4 /*yield*/, utils_1.hashPasswordHelper(password)];
                    case 2:
                        hashedPassword = _b.sent();
                        codeId = uuid_1.v4();
                        return [4 /*yield*/, this.userModel.create({
                                name: name,
                                email: email,
                                password: hashedPassword,
                                isActive: false,
                                codeId: codeId,
                                codeExpired: dayjs_1["default"]().add(10, 'minutes')
                            })];
                    case 3:
                        user = _b.sent();
                        //send emaily
                        this.mailerService.sendMail(({
                            to: user.email,
                            subject: "Activate your account",
                            template: "register.hbs",
                            context: {
                                name: (_a = user === null || user === void 0 ? void 0 : user.name) !== null && _a !== void 0 ? _a : user.email,
                                activationCode: codeId
                            }
                        }));
                        // trả ra phản hồi
                        return [2 /*return*/, { _id: user._id }];
                }
            });
        });
    };
    UsersService.prototype.handleActive = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isBeforeCheck;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.findOne({
                            _id: data._id,
                            codeId: data.code
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.BadRequestException("Mã code không hợp lệ hoặc đã hết hạn");
                        }
                        isBeforeCheck = dayjs_1["default"]().isBefore(user.codeExpired);
                        if (!isBeforeCheck) return [3 /*break*/, 3];
                        //valid => update user
                        return [4 /*yield*/, this.userModel.updateOne({ _id: data._id }, {
                                isActive: true
                            })];
                    case 2:
                        //valid => update user
                        _a.sent();
                        return [2 /*return*/, { isBeforeCheck: isBeforeCheck }];
                    case 3: throw new common_1.BadRequestException("Mã code không hợp lệ hoặc đã hết hạn");
                }
            });
        });
    };
    UsersService.prototype.retryActive = function (email) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user, codeId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userModel.findOne({ email: email })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new common_1.BadRequestException("Tài khoản không tồn tại");
                        }
                        if (user.isActive) {
                            throw new common_1.BadRequestException("Tài khoản đã được kích hoạt");
                        }
                        codeId = uuid_1.v4();
                        //update user
                        return [4 /*yield*/, user.updateOne({
                                codeId: codeId,
                                codeExpired: dayjs_1["default"]().add(5, 'minutes')
                            })
                            //send email
                        ];
                    case 2:
                        //update user
                        _b.sent();
                        //send email
                        this.mailerService.sendMail({
                            to: user.email,
                            subject: 'Activate your account ',
                            template: "register",
                            context: {
                                name: (_a = user === null || user === void 0 ? void 0 : user.name) !== null && _a !== void 0 ? _a : user.email,
                                activationCode: codeId
                            }
                        });
                        return [2 /*return*/, { _id: user._id }];
                }
            });
        });
    };
    UsersService.prototype.retryPassword = function (email) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user, codeId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userModel.findOne({ email: email })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new common_1.BadRequestException("Tài khoản không tồn tại");
                        }
                        codeId = uuid_1.v4();
                        //update user
                        return [4 /*yield*/, user.updateOne({
                                codeId: codeId,
                                codeExpired: dayjs_1["default"]().add(5, 'minutes')
                            })
                            //send email
                        ];
                    case 2:
                        //update user
                        _b.sent();
                        //send email
                        this.mailerService.sendMail({
                            to: user.email,
                            subject: 'Change your password account at @hoidanit',
                            template: "register",
                            context: {
                                name: (_a = user === null || user === void 0 ? void 0 : user.name) !== null && _a !== void 0 ? _a : user.email,
                                activationCode: codeId
                            }
                        });
                        return [2 /*return*/, { _id: user._id, email: user.email }];
                }
            });
        });
    };
    UsersService.prototype.changePassword = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isBeforeCheck, newPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (data.confirmPassword !== data.password) {
                            throw new common_1.BadRequestException("Mật khẩu/xác nhận mật khẩu không chính xác.");
                        }
                        return [4 /*yield*/, this.userModel.findOne({ email: data.email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.BadRequestException("Tài khoản không tồn tại");
                        }
                        isBeforeCheck = dayjs_1["default"]().isBefore(user.codeExpired);
                        if (!isBeforeCheck) return [3 /*break*/, 4];
                        return [4 /*yield*/, utils_1.hashPasswordHelper(data.password)];
                    case 2:
                        newPassword = _a.sent();
                        return [4 /*yield*/, user.updateOne({ password: newPassword })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, { isBeforeCheck: isBeforeCheck }];
                    case 4: throw new common_1.BadRequestException("Mã code không hợp lệ hoặc đã hết hạn");
                }
            });
        });
    };
    UsersService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(user_schema_1.User.name))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
