import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcedureAttachment } from './procedure-attachment';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from './procedure.service';


import {Procedure} from "./procedure";



@Component({
    selector: 'procedure-form',
    templateUrl: 'src/procedure/templates/procedure-form.component.html',
    //providers: [ProcedureService]
})



export class ProcedureFormComponent {
    id: any;
    deliveryDocs = [];

    procedure: Procedure[];
    mode = 'Observable'
    error: any;
    errorMessage: string;


    constructor(
        private route: ActivatedRoute,
        private procedureService: ProcedureService
    ) {
        this.deliveryDocs = procedureService.getdeliveryDocs();

        //recibe parametro a travesd e routing del temaplate
        this.route.params.subscribe(params => this.id = +params['id']);
        //console.log("radicado: " + this.id);

        this.getProcedureByID();
    }

    getProcedureByID (){

        console.log("file number: "+this.id);
        this.procedureService.getProceduresById(this.id as string).subscribe(
    procedure => this.procedure = procedure,
    error => this.errorMessage = <any>error
);

        //console.log("procedure: "+this.procedure);
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
    }

    ngOnDestroy() {
        //this.id.unsubscribe();
    }
}

