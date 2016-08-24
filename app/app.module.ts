import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
//import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';

import { provide } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';

import { appRoutingProviders, routing } from './app.routes';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        AuthModule,
        //      HomeModule
        //HTTP_PROVIDERS,
        //AUTH_PROVIDERS,
        // ¿Services can be Injected from bootstraping stage?
        //AuthGuard,
        //JwtHelper,
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent,
    ],
    providers: [
        appRoutingProviders,
        //AuthService
    ]
})
export class AppModule { }
