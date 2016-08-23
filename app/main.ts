import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    AUTH_PROVIDERS,
    // ¿Services can be Injected from bootstraping stage?
    AuthGuard,
    JwtHelper,
    disableDeprecatedForms(),
    provideForms(),
])
    .catch((err: any) => console.error(err));
