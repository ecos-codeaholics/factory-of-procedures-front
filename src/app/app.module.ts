import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AuthModule } from '../auth/auth.module';
import { HttpModule, Http } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { APP_PROVIDERS } from './app.providers';
import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';
import { appRoutingProviders, routing } from './app.routes';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '../config/config.service';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../home/dashboard.component';

import { FactoryStatisticsComponent } from '../home/factory-statistics.component';


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
        DashboardComponent,
        FactoryStatisticsComponent
    ],

    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: (config: ConfigService) => () => config.load(),
            deps: [ConfigService, Http],
            multi: true
        },
        APP_PROVIDERS,
        AuthService,
        JwtHelper,
        appRoutingProviders,
    ],
    bootstrap: [
        AppComponent,
    ],
})

export class AppModule { }
