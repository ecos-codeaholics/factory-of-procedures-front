import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureSelectComponent } from '../procedure/procedure-select.component';
import { CitizenFunctionaryComponent } from "../citizen/citizen-functionary.component";
import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from '../shared/jwt-helper.service';
import { StateService } from '../state/state.service';
import { AuthService } from '../auth/auth.service';


@Component({

    selector: 'app-dashboard',
    templateUrl: 'src/home/templates/dashboard.component.html',
    providers: [JwtHelperService, JwtHelper, StateService],
    directives: [ProcedureSelectComponent, CitizenFunctionaryComponent]
})

export class DashboardComponent implements AfterContentChecked {

    title = 'Panel de usuario';
    public profile: string;
    decodedJwt: string;
    userData: any = { 'name': '', 'lastName': '' };



    constructor(

        public router: Router,
        public jwtHelperService: JwtHelperService,
        private authService: AuthService
    ) {

        this.decodedJwt = jwtHelperService.tokenDecode();
    }

    ngAfterContentChecked() {

        this.profile = this.authService.getProfile();
        this.userData = this.authService.getUserDetail();
    }

    ngOnInit() {

    }


}
