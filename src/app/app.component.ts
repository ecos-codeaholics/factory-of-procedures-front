import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';


//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'src/app/templates/app.component.html',
})

export class AppComponent {

    title = 'Fábrica de Trámites';

    private isAuth: boolean;
    private user: string;

    constructor(
        private authGuardService: AuthGuardService,
        private authService: AuthService,
        private router: Router
    ) {
        this.isAuth = authGuardService.isAuth();

        console.log("is auth");
        console.log(this.isAuth);

        if (this.isAuth) {
            this.user = authGuardService.getUser();
            console.log("user");
            console.log(this.user);
        }
    }

    doLogout(event) {

        event.preventDefault();
        this.authService.doLogout();
        this.isAuth = false;
        this.user = null;
        this.router.navigate(['login']);

    }
}
