import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS, AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthGuardService } from './auth/auth-guard.service';
import { JwtHelperService } from './shared/jwt-helper.service';

export const APP_PROVIDERS = [
    HTTP_PROVIDERS,
    AUTH_PROVIDERS,
    AuthGuardService,
    JwtHelperService
];
