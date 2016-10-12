import { Component, OnInit, Input, Pipe, Output } from '@angular/core';

import { ProcedureAttachment } from './procedure-attachment';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from './procedure.service';

import { ProcedureRequest } from "./model/procedure-request";

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-form',
    templateUrl: 'src/procedure/templates/procedure-form.component.html'
})

export class ProcedureFormComponent {
    id: any;
    deliveryDocs: string[];

    procedures: ProcedureRequest[] = [];
    master: string = "MasterTestlast try";
    
    title = 'Detalle De Trámite';
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
        
        console.log("procedure-form> constructor");
        this.isAuth = authService.isAuth();

        if (this.isAuth) {

            this.profile = authService.getProfile();
        }


    }

    getProcedureByID() {
        this.procedureService.getProceduresById(this.id).subscribe(
            procedures => this.procedures = procedures,
            error => this.errorMessage = <any>error
        );
        console.log("procedure: " + this.procedures);
    }

    getFunctionaryProdecureByID() {

        

    }

    getdeliveryDocs() {
        // this.deliveryDocs = this.procedureService.getdeliveryDocs(this.id);
        console.log(this.deliveryDocs);
    }

    getAuthStatus() {

        this.authService.getAuthStatus().subscribe(

            (status: boolean) => {
                this.isAuth = status;
            }
        );
        console.log("procedure-list> getAuthStatus " + this.isAuth);
        return this.isAuth;
    }

    ngOnInit() {
        //recibe parametro a travesd e routing del temaplate
        this.route.params.subscribe(params => this.id = +params['id']);
        console.log("radicado: " + this.id);

        //this.deliveryDocs = procedureService.getdeliveryDocs();

        if ( this.profile === "citizen") {
            this.getProcedureByID(); 
        } else {
            this.getFunctionaryProdecureByID();
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

