import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent {

    title = 'Aca va al nombre del trámite';

    @Input('procedures') procedures: Procedure[];

}
