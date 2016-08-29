import { NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth.module';
import { HttpModule, Http } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { APP_PROVIDERS } from './app.providers';
import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';
import { appRoutingProviders, routing } from './app.routes';
import { AuthService } from '../auth/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';

import { CheckUserDirective } from '../shared/check-user.directive';

@NgModule({
    imports: [
        BrowserModule,
        AuthModule,
        SharedModule,
        routing,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
    providers: [
        APP_PROVIDERS,
        AuthService,
        JwtHelper,
        appRoutingProviders
    ]
})

export class AppModule { }
