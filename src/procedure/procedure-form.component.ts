import {Component, OnInit, Input, Pipe, Output} from '@angular/core';

import { ProcedureAttachment } from './procedure-attachment';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from './procedure.service';

import { Procedure } from "./procedure";



@Component({
    selector: 'procedure-form',
    templateUrl: 'src/procedure/templates/procedure-form.component.html'
})

export class ProcedureFormComponent {
    id: any;
    deliveryDocs: string[];

    procedures: Procedure[] = [];

    master: string = "MasterTestlast try";

    mode = 'Observable'
    error: any;
    errorMessage: string;

    constructor(private route: ActivatedRoute,
        private procedureService: ProcedureService) {

    }

    getProcedureByID() {
        this.procedureService.getProceduresById(this.id).subscribe(
            procedures => this.procedures = procedures,
            error => this.errorMessage = <any>error
        );
        console.log("procedure: " + this.procedures);
    }


    title = 'Detalle De Trámite';
    file = new ProcedureAttachment('');

    getdeliveryDocs() {
        // this.deliveryDocs = this.procedureService.getdeliveryDocs(this.id);
        console.log(this.deliveryDocs);
    }

    ngOnInit() {
        //recibe parametro a travesd e routing del temaplate
        this.route.params.subscribe(params => this.id = +params['id']);
        console.log("radicado: " + this.id);

        //this.deliveryDocs = procedureService.getdeliveryDocs();

        this.getProcedureByID();

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

