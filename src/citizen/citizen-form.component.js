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
var citizen_service_1 = require('./citizen.service');
var citizen_1 = require('./citizen');
var CitizenFormComponent = (function () {
    function CitizenFormComponent(citizenService) {
        this.citizenService = citizenService;
        this.title = 'Perfil del ciudadano';
        this.citizen = new citizen_1.Citizen('', 1, '', '', '', '', '', '');
        this.submitted = false;
    }
    Object.defineProperty(CitizenFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.citizen); },
        enumerable: true,
        configurable: true
    });
    CitizenFormComponent = __decorate([
        core_1.Component({
            selector: 'citizen-form',
            templateUrl: 'src/citizen/templates/citizen-form.component.html'
        }), 
        __metadata('design:paramtypes', [citizen_service_1.CitizenService])
    ], CitizenFormComponent);
    return CitizenFormComponent;
}());
exports.CitizenFormComponent = CitizenFormComponent;
//# sourceMappingURL=citizen-form.component.js.map