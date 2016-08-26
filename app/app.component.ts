import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from './shared/jwt-helper.service';

//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
})

export class AppComponent {
    title = 'Fábrica de Trámites';

    decodedJwt: any;
    currentUser: string;

    constructor(
        public router: Router,
        public jwtHelperService: JwtHelperService
    ) {
        this.decodedJwt = jwtHelperService.tokenDecode();

        console.log(this.decodedJwt);

        if (!(this.decodedJwt === "unauthorized")) {
            this.currentUser = this.decodedJwt.username;
        }
    }
}

