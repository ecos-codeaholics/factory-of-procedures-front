import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

//import './rxjs-extensions';

//enable production mode
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
    selector: 'app',
    templateUrl: 'src/app/templates/app.component.html',
})

export class AppComponent implements AfterContentChecked {

    title = 'Fábrica de Trámites';

    public isAuth: boolean;
    public user: string;
    public profile: string;

    status: boolean;

    constructor(
        private authGuardService: AuthGuardService,
        private authService: AuthService,
        private router: Router
    ) {
        this.isAuth = authGuardService.isAuth();

        if (this.isAuth) {
            this.profile = authGuardService.getProfile();
            this.user = authGuardService.getUser();
        }
    }

    getAuthStatus() {
        this.authService.getAuthStatus().subscribe(
            (status: boolean) => {
                this.status = status;
            }
        );

        return this.status;
    }

    doLogout(event) {

        event.preventDefault();
        this.isAuth = false;
        this.user = null;
        this.authService.setAuthStatus(false);
        this.authService.doLogout();
        this.router.navigate(['acceder']);

    }

    ngAfterContentChecked() {
        this.isAuth = this.getAuthStatus();
    }
}
