import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    AUTH_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
])
    .catch((err: any) => console.error(err));
