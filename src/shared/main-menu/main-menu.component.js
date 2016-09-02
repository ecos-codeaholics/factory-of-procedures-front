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
var common_1 = require('@angular/common');
var jwt_helper_service_1 = require('../jwt-helper.service');
var MainMenuComponent = (function () {
    function MainMenuComponent(router, jwtHelperService, location) {
        this.router = router;
        this.jwtHelperService = jwtHelperService;
        this.location = location;
        this.decodedJwt = jwtHelperService.tokenDecode();
        if (!(this.decodedJwt === "unauthorized")) {
            this.currentUser = this.decodedJwt.username;
        }
    }
    MainMenuComponent = __decorate([
        core_1.Component({
            selector: 'main-menu',
            templateUrl: 'src/shared/main-menu/templates/main-menu.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, jwt_helper_service_1.JwtHelperService, common_1.Location])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=main-menu.component.js.map