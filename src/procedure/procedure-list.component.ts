import {Component, OnInit, Input} from '@angular/core';

import {ProcedureService} from './procedure.service';

import {ProcedureRequest} from './model/procedure-request';

import {AuthService} from '../auth/auth.service';


@Component({
    selector: 'procedure-list',
    templateUrl: 'src/procedure/templates/procedure-list.component.html',
})

export class ProcedureListComponent implements OnInit {

    title = 'Mis Trámites';

    procedures: ProcedureRequest[];

    //@Input() status;
    //mode = 'Observable'

    public isAuth: boolean;
    public user: string;
    public profile: string;
    public status: boolean;

    error: any;

    errorMessage: string;

    constructor(private authService: AuthService,
                private procedureService: ProcedureService) {
        this.isAuth = authService.isAuth();
        if (this.isAuth) {
            this.profile = authService.getProfile();
        }
    }

    // TODO: Should implement pipe transformation to
    // filter procedures as historic or ongoing
    getProcedures() {
        this.procedureService.getProcedures().subscribe(
            (procedures) => {
                this.procedures = procedures;
                console.log(procedures);
            },
            error => this.errorMessage = <any>error
        );
    }

    getFunctionaryProcedures() {
        this.procedureService.getFunctionaryProcedures().subscribe(
            procedures => this.procedures = procedures,
            error => this.errorMessage = <any>error
        );
    }

    filterHistoric(event) {
        event.preventDefault();
        console.log("procedure-list> Getting historic procedures");
        console.log(this.procedures);
    }

    filterOngoing(event) {
        console.log("procedure-list> Getting Ongoing procedures");
        event.preventDefault();
    }

    getAuthStatus() {

        this.authService.getAuthStatus().subscribe(
            (status: boolean) => {
                this.isAuth = status;
            }
        );
        return this.isAuth;
    }

    //ngAfterContentChecked() {
    //
    //    this.status = this.getAuthStatus();
    //    this.profile = this.authService.getProfile();
    //    this.user = this.authService.getUser();
    //    console.log("procedure-list> ngAfterContentChecked " + this.isAuth);
    //}

    ngOnInit() {
        this.status = this.getAuthStatus();
        this.profile = this.authService.getProfile();
        this.user = this.authService.getUser();
        if (this.profile === "citizen") {
            this.getProcedures();
        } else {
            this.getFunctionaryProcedures();
        }
    }
}
