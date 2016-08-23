import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { provide } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';

import { appRoutingProviders, routing } from './app.routes';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        appRoutingProviders,
        FormsModule,
        HTTP_PROVIDERS,
        AUTH_PROVIDERS,
        // ¿Services can be Injected from bootstraping stage?
        AuthGuard,
        JwtHelper,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
