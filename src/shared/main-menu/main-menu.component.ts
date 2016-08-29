import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from '../jwt-helper.service';

@Component({
    selector: 'main-menu',
    templateUrl: 'src/shared/main-menu/templates/main-menu.component.html',
    //directives: [ROUTER_DIRECTIVES]
})

export class MainMenuComponent {

    decodedJwt: any;
    currentUser: string;

    constructor(
        public router: Router,
        public jwtHelperService: JwtHelperService,
        private location: Location
    ) {
        this.decodedJwt = jwtHelperService.tokenDecode();

        if (!(this.decodedJwt === "unauthorized")) {
            this.currentUser = this.decodedJwt.username;
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
