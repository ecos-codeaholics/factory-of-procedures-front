import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { ProcedureRequest } from './model/procedure-request';

@Component({
    selector: 'procedure-list',
    //inputs: ['status'],
    templateUrl: 'src/procedure/templates/procedure-assigned.component.html',
    providers: [ProcedureService]
})

export class ProcedureAssignedComponent implements OnInit {

    procedures: ProcedureRequest[];

    //@Input() status;

    mode = 'Observable'

    error: any;

    errorMessage: string;
    constructor(
        private procedureService: ProcedureService
    ) { }

    // TODO: Should implement pipe transformation to
    // filter procedures as historic or ongoing
    getProcedures() {
        this.procedureService.getFunctionaryProcedures().subscribe(
            procedures => this.procedures = procedures,
            error => this.errorMessage = <any>error
        );
    }
    ngOnInit() {

        this.getProcedures();
    }
}
