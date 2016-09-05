import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-list',
    templateUrl: 'src/procedure/templates/procedure-list.component.html'
})

export class ProcedureListComponent implements OnInit {

    procedures: Procedure[];

    @Input() status;

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

    filterHistoric(event) {
        event.preventDefault();
        console.log("Getting historic procedures");
        console.log(this.procedures);
    }

    filterOngoing(event) {
        event.preventDefault();

	/**
        this.procedures.find((e) => {
            console.log(e);
            return e.status == "En curso";

        });
        console.log("Getting ongoing procedures");
	*/

    }

    ngOnInit() {

        this.getProcedures();
    }
}
