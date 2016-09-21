import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-list',
    //inputs: ['status'],
    templateUrl: 'src/procedure/templates/procedure-list.component.html',
    providers: [ProcedureService]
})

export class ProcedureListComponent implements OnInit {

    procedures: Procedure[];

    //   @Input() status;

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
    }

    filterHistoric(event) {
        event.preventDefault();
        console.log("Getting historic procedures");
        console.log(this.procedures);
    }

    filterOngoing(event) {
        event.preventDefault();
    }

    ngOnInit() {

        this.getProcedures();
    }
}
