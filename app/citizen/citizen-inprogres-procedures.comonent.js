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
var citizen_detail_component_1 = require('./citizen-detail.component');
var citizen_service_1 = require('./citizen.service');
var CitizenInProgressProceduresComponent = (function () {
    function CitizenInProgressProceduresComponent(citizenService, router) {
        this.citizenService = citizenService;
        this.router = router;
        this.title = "Tramites en curso";
    }
    CitizenInProgressProceduresComponent = __decorate([
        core_1.Component({
            selector: 'citizen-hist',
            templateUrl: 'app/citizen/templates/citizen-inprogress-procedures.component.html',
            directives: [citizen_detail_component_1.CitizenDetailComponent]
        }), 
        __metadata('design:paramtypes', [citizen_service_1.CitizenService, router_1.Router])
    ], CitizenInProgressProceduresComponent);
    return CitizenInProgressProceduresComponent;
}());
exports.CitizenInProgressProceduresComponent = CitizenInProgressProceduresComponent;
//# sourceMappingURL=citizen-inprogres-procedures.comonent.js.map