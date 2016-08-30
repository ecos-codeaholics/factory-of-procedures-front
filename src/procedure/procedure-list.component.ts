import { Component, OnInit } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-list',
    templateUrl: 'src/procedure/templates/procedure-list.component.html'
})

export class ProcedureListComponent implements OnInit {

    title = 'Filtrando por ...';

    procedures: Procedure[];

    constructor(
        private procedureService: ProcedureService
    ) { }

    // TODO: Should implement pipe transformation to
    // filter procedures as historic or ongoing
    getProcedures() {

        // TODO: Don't forget to subscribe this to an
        // observable
        this.procedures = this.procedureService
            .getProcedures();
    }

    ngOnInit() {

        this.getProcedures();
    }
}
