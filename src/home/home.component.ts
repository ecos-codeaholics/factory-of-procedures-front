import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureSelectComponent } from '../procedure/procedure-select.component';

import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from '../shared/jwt-helper.service';
import { StateService } from '../state/state.service';
import { AuthService } from '../auth/auth.service';

@Component({

    selector: 'app-home',
    templateUrl: 'src/home/templates/home.component.html',
    providers: [JwtHelperService, JwtHelper, StateService],
    directives: [ProcedureSelectComponent]
})

export class HomeComponent {

    title = 'Inicio';
    public profile: string;
    decodedJwt: string;

    constructor(

        public router: Router,
        public jwtHelperService: JwtHelperService,
        private authService: AuthService
    ) {

        this.decodedJwt = jwtHelperService.tokenDecode();
    }

    ngAfterContentChecked() {

        this.profile = this.authService.getProfile();
    }


}
