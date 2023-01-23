"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_cls_1 = require("nestjs-cls");
const logger_service_1 = require("./logger.service");
let LoggerModule = LoggerModule_1 = class LoggerModule {
    static register() {
        return {
            module: LoggerModule_1,
            imports: [
                nestjs_cls_1.ClsModule.forRoot({
                    global: true,
                    middleware: { mount: true },
                }),
            ],
            providers: [logger_service_1.LoggerService],
            exports: [logger_service_1.LoggerService],
        };
    }
};
LoggerModule = LoggerModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [],
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;
//# sourceMappingURL=logger.module.js.map