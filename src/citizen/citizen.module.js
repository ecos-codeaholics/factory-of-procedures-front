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
var citizen_routing_1 = require('./citizen.routing');
var citizen_home_component_1 = require('./citizen-home.component');
var citizen_list_component_1 = require('./citizen-list.component');
var citizen_form_component_1 = require('./citizen-form.component');
var citizen_select_procedure_component_1 = require('./citizen-select-procedure.component');
var state_service_1 = require('../state/state.service');
var citizen_service_1 = require('./citizen.service');
var CitizenModule = (function () {
    function CitizenModule() {
    }
    CitizenModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                citizen_routing_1.routing
            ],
            declarations: [
                citizen_home_component_1.CitizenHomeComponent,
                citizen_list_component_1.CitizenListComponent,
                citizen_form_component_1.CitizenFormComponent,
                citizen_select_procedure_component_1.CitizenSelectProcedureComponent
            ],
            providers: [
                citizen_service_1.CitizenService,
                state_service_1.StateService
            ],
            exports: [citizen_select_procedure_component_1.CitizenSelectProcedureComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CitizenModule);
    return CitizenModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CitizenModule;
//# sourceMappingURL=citizen.module.js.map