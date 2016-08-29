"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var auth_routing_1 = require('./auth.routing');
var auth_service_1 = require('./auth.service');
var login_component_1 = require('./login.component');
var signup_component_1 = require('./signup.component');
var recover_component_1 = require('./recover.component');
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                auth_routing_1.routing
            ],
            declarations: [
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                recover_component_1.RecoverComponent
            ],
            providers: [
                auth_service_1.AuthService
            ],
            exports: [
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                recover_component_1.RecoverComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map