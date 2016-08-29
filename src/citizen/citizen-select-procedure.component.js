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
var state_service_1 = require('../state/state.service');
var CitizenSelectProcedureComponent = (function () {
    function CitizenSelectProcedureComponent(stateService) {
        this.stateService = stateService;
        this.title = 'Seleccione el trámite que desea realizar';
    }
    CitizenSelectProcedureComponent.prototype.getStates = function () {
        var _this = this;
        this.stateService.getStates()
            .then(function (states) { return _this.states = states; });
    };
    CitizenSelectProcedureComponent.prototype.getCities = function () {
        this.cities = this.states[this.state].cities;
    };
    CitizenSelectProcedureComponent.prototype.getProcedures = function () {
        this.procedures = this.city;
    };
    CitizenSelectProcedureComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    CitizenSelectProcedureComponent = __decorate([
        core_1.Component({
            selector: 'select-procedure',
            templateUrl: 'src/citizen/templates/citizen-select-procedure.html'
        }), 
        __metadata('design:paramtypes', [state_service_1.StateService])
    ], CitizenSelectProcedureComponent);
    return CitizenSelectProcedureComponent;
}());
exports.CitizenSelectProcedureComponent = CitizenSelectProcedureComponent;
//# sourceMappingURL=citizen-select-procedure.component.js.map