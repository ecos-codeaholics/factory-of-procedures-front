import { Component, OnInit } from '@angular/core';

import { State } from '../state/state';
import { StateService } from '../state/state.service';

@Component({
    selector: 'select-procedure',
    templateUrl: 'app/citizen/templates/citizen-select-procedure.html',
    providers: [StateService]

})

export class CitizenSelectProcedureComponent implements OnInit {
    title = 'Seleccione el trámite que desea realizar';

    states: State[];

    constructor(
        private stateService: StateService
    ) { }

    getStates() {

        this.stateService.getStates()
            .then(states => this.states = states);
    }

    ngOnInit() {
        this.getStates();
    }
}
