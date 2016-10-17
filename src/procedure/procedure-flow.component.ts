import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';
import { ProcedureRequest } from './model/procedure-request';
import { Activity } from './model/activity';

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent implements OnInit {

    title = 'Aca va al nombre del trámite';
    public activities: Array<Activity>;
    public fileNumber: number;
    public msg: string;

    @Input('profile') profile: string;
    @Input('procedure') procedure: ProcedureRequest;

    constructor(
        private procedureService: ProcedureService
    ) { }

    getSteps() {
        this.activities = this.procedure[0]["activities"];
    }

    doStepApproval(check) {
        status = status ? "Finalizado" : "En curso";

        this.procedureService.doStepApproval(status, this.fileNumber)
            .subscribe(
            (res) => {
                //this.activity.aprobacion = res.responseMsg;
                console.log(this.activities);
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
