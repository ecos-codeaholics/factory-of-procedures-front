"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var signup_component_1 = require('./signup.component');
var recover_component_1 = require('./recover.component');
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'recover',
        component: recover_component_1.RecoverComponent
    }
]);
//# sourceMappingURL=auth.routing.js.map