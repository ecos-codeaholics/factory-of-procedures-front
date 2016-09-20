import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';

//import './rxjs-extensions';

//enable production mode
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
    selector: 'app',
    templateUrl: 'src/app/templates/app.component.html',
})

export class AppComponent {

    title = 'Fábrica de Trámites';

    public isAuth: boolean;
    public user: string;
    public profile: string;

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

    doLogout(event) {

        event.preventDefault();
        this.authService.doLogout();
        this.isAuth = false;
        this.user = null;
        this.router.navigate(['acceder']);

    }
}
