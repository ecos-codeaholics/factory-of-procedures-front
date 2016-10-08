import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-list',
    templateUrl: 'src/procedure/templates/procedure-pending.component.html',
})

export class ProcedurePendingComponent implements OnInit {

    title = 'Trámites pendientes';

    procedures: Procedure[];

    constructor(
        private procedureService: ProcedureService
    ) { }

    getProcedures() {
        this.procedures = this.procedureService.getProceduresMock();

    }

    ngOnInit() {
        this.getProcedures();
    }

}
