import {Component, OnInit, AfterContentChecked, Input, HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {AuthGuardService} from '../auth/auth-guard.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

//enable production mode
//import { enableProdMode } from '@angular/core';
//enableProdMode();

@Component({
    selector: 'app',
    templateUrl: 'src/app/templates/app.component.html',
})

export class AppComponent implements AfterContentChecked {

    title = 'Fábrica de Trámites';

    public isAuth: boolean;
    public user: string;
    public profile: string;
    public status: boolean;

    constructor(private authService: AuthService,
                private router: Router) {

        this.isAuth = authService.isAuth();

        if (this.isAuth) {
            this.profile = authService.getProfile();
            this.user = authService.getUser();
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

    doLogout(event) {

        event.preventDefault();
        this.isAuth = false;
        this.authService.setAuthStatus(false);
        this.authService.doLogout();
        if (this.profile == 'citizen') {
            this.router.navigate(['acceder']);
        } else {
            this.router.navigate(['funcionarios']);
        }

    }

    ngAfterContentChecked() {

        this.status = this.getAuthStatus();
        this.profile = this.authService.getProfile();
        this.user = this.authService.getUser();
    }

    @HostListener('window:unload', ['$event'])
    unloadHandler(event) {
        localStorage.removeItem('id_token');
    }
}
