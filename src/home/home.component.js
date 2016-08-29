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
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var jwt_helper_service_1 = require('../shared/jwt-helper.service');
var HomeComponent = (function () {
    function HomeComponent(router, jwtHelperService) {
        this.router = router;
        this.jwtHelperService = jwtHelperService;
        this.title = 'Inicio';
        this.decodedJwt = jwtHelperService.tokenDecode();
        console.log(this.decodedJwt);
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'src/home/templates/home.component.html',
            providers: [jwt_helper_service_1.JwtHelperService, angular2_jwt_1.JwtHelper]
        }), 
        __metadata('design:paramtypes', [router_1.Router, jwt_helper_service_1.JwtHelperService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map