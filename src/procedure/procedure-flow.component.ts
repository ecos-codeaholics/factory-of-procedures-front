import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';
import { ProcedureRequest } from './model/procedure-request';
import { Step } from './model/step';

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent implements OnInit {

    title = 'Aca va al nombre del trámite';
    public steps: Step;
    public fileNumber: number;
    public msg: string;

    @Input('profile') profile: string;
    @Input('procedure') procedure: ProcedureRequest;

    constructor(
        private procedureService: ProcedureService
    ) { }

    getSteps() {
        // FIXME: Steps should be really an array of documents
        this.steps = this.procedure[0]["steps"];
    }

    doStepApproval(check) {
        status = status ? "Finalizado" : "En curso";

        this.procedureService.doStepApproval(status, this.fileNumber)
            .subscribe(
            (res) => {
                this.steps.aprobacion = res.responseMsg;
            },
            () => {
                this.msg = "El registro ha sido actualizado";
            })
    }

    ngOnInit() {
        this.getSteps();
        this.fileNumber = this.procedure[0].fileNumber
    }
}
