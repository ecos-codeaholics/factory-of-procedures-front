"use strict";
var router_1 = require('@angular/router');
var procedure_list_component_1 = require('./procedure-list.component');
var procedure_form_component_1 = require('./procedure-form.component');
var auth_guard_service_1 = require('../auth/auth-guard.service');
exports.routing = router_1.RouterModule.forChild([
    { path: '', component: procedure_list_component_1.ProcedureListComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'edit', component: procedure_form_component_1.ProcedureFormComponent, canActivate: [auth_guard_service_1.AuthGuardService] }
]);
//# sourceMappingURL=procedure.routing.js.map