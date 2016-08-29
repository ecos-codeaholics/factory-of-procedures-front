"use strict";
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var auth_guard_service_1 = require('../auth/auth-guard.service');
var jwt_helper_service_1 = require('../shared/jwt-helper.service');
exports.APP_PROVIDERS = [
    http_1.HTTP_PROVIDERS,
    angular2_jwt_1.AUTH_PROVIDERS,
    auth_guard_service_1.AuthGuardService,
    jwt_helper_service_1.JwtHelperService
];
//# sourceMappingURL=app.providers.js.map