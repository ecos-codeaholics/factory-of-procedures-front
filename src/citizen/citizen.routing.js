"use strict";
var router_1 = require('@angular/router');
var citizen_list_component_1 = require('./citizen-list.component');
var citizen_form_component_1 = require('./citizen-form.component');
var citizen_detail_component_1 = require('./citizen-detail.component');
var auth_guard_service_1 = require('../auth/auth-guard.service');
exports.routing = router_1.RouterModule.forChild([
    { path: '', component: citizen_list_component_1.CitizenListComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'edit', component: citizen_form_component_1.CitizenFormComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'detail/:id', component: citizen_detail_component_1.CitizenDetailComponent, canActivate: [auth_guard_service_1.AuthGuardService] }
]);
//# sourceMappingURL=citizen.routing.js.map