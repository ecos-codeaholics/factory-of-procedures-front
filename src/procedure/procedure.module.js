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
var procedure_routing_1 = require('./procedure.routing');
var procedure_home_component_1 = require('./procedure-home.component');
var procedure_list_component_1 = require('./procedure-list.component');
var procedure_form_component_1 = require('./procedure-form.component');
var ProcedureModule = (function () {
    function ProcedureModule() {
    }
    ProcedureModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                procedure_routing_1.routing
            ],
            declarations: [
                procedure_home_component_1.ProcedureHomeComponent,
                procedure_list_component_1.ProcedureListComponent,
                procedure_form_component_1.ProcedureFormComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProcedureModule);
    return ProcedureModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProcedureModule;
//# sourceMappingURL=procedure.module.js.map