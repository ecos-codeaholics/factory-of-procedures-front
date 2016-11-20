import { Component, OnInit, Input, Pipe, Output } from '@angular/core';

import { ProcedureAttachment } from './procedure-attachment';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from './procedure.service';

import { ProcedureRequest } from "./model/procedure-request";
import { ProcedureHistory } from "./model/procedure-history";

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-form',
    templateUrl: 'src/procedure/templates/procedure-form.component.html'
})

export class ProcedureFormComponent {
    id: any;
    deliveryDocs: string[];

    procedures: ProcedureRequest[] = [];
    procedure: ProcedureRequest;

    histories: ProcedureHistory[] = []

    title = 'Detalle del Trámite';
    file = new ProcedureAttachment('');

    public isAuth: boolean;
    public user: string;
    public profile: string;
    public status: boolean;

    error: any;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private procedureService: ProcedureService) {

        this.isAuth = authService.isAuth();

        if (this.isAuth) {

            this.profile = authService.getProfile();
        }
    }

    getProcedureByID() {
        this.procedureService.getProcedureById(this.id).subscribe(
            (procedure) => {
                this.procedure = procedure;
                this.histories = procedure[0]["histories"];
            },
            error => this.errorMessage = <any>error
        );
    }

    getFunctionaryProcedureByID() {
        this.procedureService.getFunctionaryProcedureById(this.id).subscribe(
            (procedure) => {
                this.procedure = procedure;
                this.histories = procedure[0]["histories"];
            }
        )
    }
    getAuthStatus() {
        this.authService.getAuthStatus().subscribe(

            (status: boolean) => {
                this.isAuth = status;
            }
        );
        // console.log("procedure-list> getAuthStatus " + this.isAuth);
        return this.isAuth;
    }

    ngOnInit() {
        this.route.params.subscribe(params => this.id = +params['id']);
        if (this.profile === "citizen") {
            this.getProcedureByID();
        } else if (this.profile === "functionary") {
            this.getFunctionaryProcedureByID();
        }
    }

    keys(object: {}) {
        //checking undefined object from the request
        if ((object === undefined) || (object === null)) {
            return object;
        }
        //return key and values of the object
        return Object.keys(object);
    }
}

