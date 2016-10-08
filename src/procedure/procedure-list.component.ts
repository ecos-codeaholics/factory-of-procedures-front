import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-list',
    templateUrl: 'src/procedure/templates/procedure-list.component.html',
    //providers: [ProcedureService]
})

export class ProcedureListComponent implements OnInit {

     title = 'Mis Trámites';
    
    procedures: Procedure[];

       @Input() status;

    mode = 'Observable'

    error: any;

    errorMessage: string;
    constructor(
        private procedureService: ProcedureService
    ) { }

    // TODO: Should implement pipe transformation to
    // filter procedures as historic or ongoing
    getProcedures() {
        this.procedureService.getProcedures().subscribe(
            procedures => this.procedures = procedures,
            error => this.errorMessage = <any>error
        );
        console.log("list-componet "+this.procedures);
    }

    filterHistoric(event) {
        event.preventDefault();
        console.log("Getting historic procedures");
        console.log(this.procedures);
    }

    filterOngoing(event) {
        console.log("Getting Ongoing procedures");
        event.preventDefault();
    }

    ngOnInit() {

        this.getProcedures();
    }
}
