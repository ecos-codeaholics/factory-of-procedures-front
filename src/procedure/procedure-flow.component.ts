import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';
import { ProcedureRequest } from './model/procedure-request';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent implements OnInit {

    title = 'Aca va al nombre del trámite';

    @Input('procedures') procedures: ProcedureRequest[];
    procedure: Procedure;

    constructor(private procedureService: ProcedureService) {

    }

    getProcedureFlow() {
        this.procedureService.getProcedureFlow();
    }

    ngOnInit() {
        this.getProcedureFlow();
    }
}
