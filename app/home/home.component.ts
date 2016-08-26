import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenSelectProcedureComponent } from '../citizen/citizen-select-procedure.component';
import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from '../shared/jwt-helper.service';

@Component({
    selector: 'app-home',
    templateUrl: 'app/home/templates/home.component.html',
    // TODO: Should this component work alongside Home Module?
    // @See Issue #19
    providers: [JwtHelperService, JwtHelper]
})

export class HomeComponent {

    title = 'Inicio';

    jwt: string;
    decodedJwt: string;
    response: string;
    api: string;

    constructor(
        public router: Router,
        public jwtHelperService: JwtHelperService
    ) {
        this.decodedJwt = jwtHelperService.tokenDecode();
        console.log(this.decodedJwt);
    }
}
