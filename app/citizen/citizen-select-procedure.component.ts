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
    state: any;
    city: any;

    cities: Array<string>;
    procedures: Array<string>;

    selectedElement: string;

    constructor(
        private stateService: StateService
    ) { }

    getStates() {

        this.stateService.getStates()
            .then(states => this.states = states);
    }

    getCities() {
        this.cities = this.states[this.state].cities;
    }

    // TODO: To be completed with stored procedures.
    // Meanwhile, procedures variable will contain the city
    // name to handle conditional rendering of form-control
    // element and it's childs
    getProcedures() {
        this.procedures = this.city;
    }

    ngOnInit() {
        this.getStates();
    }
}
