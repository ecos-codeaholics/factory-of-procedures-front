import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthGuardService } from '../../auth/auth-guard.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'main-menu',
    templateUrl: 'src/shared/main-menu/templates/main-menu.component.html',
    //directives: [ROUTER_DIRECTIVES]
})

export class MainMenuComponent {

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
        }
    }

    // Attempt to hide main menu from login path
    //
    //private get hideElement(): boolean {
    //    console.log(this.location.path())
    //    switch (this.location.path()) {
    //        case '/login':
    //            return false;
    //        default:
    //            return true;
    //    }
    //}
}
