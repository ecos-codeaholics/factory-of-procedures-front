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
var CitizenListComponent = (function () {
    function CitizenListComponent(citizenService) {
        this.citizenService = citizenService;
        this.title = "Lista de ciudadanos";
    }
    CitizenListComponent.prototype.onSelect = function (citizen) {
        this.selectedCitizen = citizen;
    };
    CitizenListComponent.prototype.getCitizens = function () {
        var _this = this;
        this.citizenService
            .getCitizens()
            .subscribe(function (citizens) { return _this.citizens = JSON.parse(citizens); });
    };
    CitizenListComponent.prototype.ngOnInit = function () {
        this.getCitizens();
    };
    CitizenListComponent = __decorate([
        core_1.Component({
            selector: 'citizen-list',
            templateUrl: 'src/citizen/templates/citizen-list.component.html'
        }), 
        __metadata('design:paramtypes', [citizen_service_1.CitizenService])
    ], CitizenListComponent);
    return CitizenListComponent;
}());
exports.CitizenListComponent = CitizenListComponent;
//# sourceMappingURL=citizen-list.component.js.map