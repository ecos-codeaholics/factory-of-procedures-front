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
var citizen_service_1 = require('./citizen.service');
var CitizenDetailComponent = (function () {
    function CitizenDetailComponent(citizenService, route) {
        this.citizenService = citizenService;
        this.route = route;
        this.navigated = false;
    }
    CitizenDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                console.log(params['id']);
                var id = +params['id'];
                _this.navigated = true;
                _this.citizenService.getCitizen(id)
                    .then(function (citizen) { return _this.citizen = citizen; });
            }
            else {
                _this.navigated = false;
            }
        });
    };
    CitizenDetailComponent = __decorate([
        core_1.Component({
            selector: 'citizen-detail',
            templateUrl: 'src/citizen/templates/citizen-detail.component.html'
        }), 
        __metadata('design:paramtypes', [citizen_service_1.CitizenService, router_1.ActivatedRoute])
    ], CitizenDetailComponent);
    return CitizenDetailComponent;
}());
exports.CitizenDetailComponent = CitizenDetailComponent;
//# sourceMappingURL=citizen-detail.component.js.map