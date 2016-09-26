import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({

    selector: 'main-menu',
    templateUrl: 'src/shared/main-menu/templates/main-menu.component.html',
})

export class MainMenuComponent {

    public isAuth: boolean;
    public user: string;
    public profile: string;
    public status: boolean;

    constructor(

        private authService: AuthService,
        private router: Router
    ) {

        this.isAuth = authService.isAuth();

        if (this.isAuth) {

            this.profile = authService.getProfile();
        }
    }

    getAuthStatus() {

        this.authService.getAuthStatus().subscribe(

            (status: boolean) => {
                this.isAuth = status;
            }
        );

        return this.isAuth;
    }

    ngAfterContentChecked() {

        this.status = this.getAuthStatus();
        this.profile = this.authService.getProfile();
        this.user = this.authService.getUser();
    }
}
