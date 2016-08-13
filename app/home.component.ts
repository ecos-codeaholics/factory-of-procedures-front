import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CitizenSelectProcedureComponent } from './citizen/citizen-select-procedure.component';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from './common/jwt-helper.service';

@Component({
    selector: 'app-home',
    templateUrl: 'app/templates/home.component.html',
    directives: [ROUTER_DIRECTIVES, CitizenSelectProcedureComponent],
    precompile: [CitizenSelectProcedureComponent],
    providers: [JwtHelperService]
})

export class HomeComponent {

    title = 'Inicio';

    jwt: string;
    decodedJwt: string;
    response: string;
    api: string;

    constructor(
        public router: Router,
        public authHttp: AuthHttp,
        public jwtHelperService: JwtHelperService
    ) {
        this.decodedJwt = jwtHelperService.tokenDecode();
        console.log(this.decodedJwt);
    }


}
