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
var auth_module_1 = require('../auth/auth.module');
var platform_browser_1 = require('@angular/platform-browser');
var shared_module_1 = require('../shared/shared.module');
var app_providers_1 = require('./app.providers');
var angular2_jwt_1 = require('angular2-jwt');
var app_routes_1 = require('./app.routes');
var auth_service_1 = require('../auth/auth.service');
var app_component_1 = require('./app.component');
var home_component_1 = require('../home/home.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                auth_module_1.AuthModule,
                shared_module_1.SharedModule,
                app_routes_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
            providers: [
                app_providers_1.APP_PROVIDERS,
                auth_service_1.AuthService,
                angular2_jwt_1.JwtHelper,
                app_routes_1.appRoutingProviders
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map