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
var auth_service_1 = require('./auth.service');
var citizen_1 = require('../citizen/citizen');
var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.title = 'Registro de Ciudadano';
        this.citizen = new citizen_1.Citizen('', NaN, '', '', '', '', '', '');
        this.submitted = false;
    }
    SignupComponent.prototype.doSignup = function (citizen) {
        var _this = this;
        this.authService
            .doSignup(this.citizen)
            .then(function (citizen) {
            _this.citizen = citizen;
        })
            .catch(function (error) { return _this.error = error; });
    };
    Object.defineProperty(SignupComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.citizen); },
        enumerable: true,
        configurable: true
    });
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'src/auth/templates/signup.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map