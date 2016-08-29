"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var auth_guard_service_1 = require('../auth/auth-guard.service');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuardService],
    },
    {
        path: 'auth',
        loadChildren: 'src/auth/auth.module',
    },
    {
        path: 'procedures',
        loadChildren: 'src/procedure/procedure.module',
    },
    {
        path: 'citizens',
        loadChildren: 'src/citizen/citizen.module',
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map