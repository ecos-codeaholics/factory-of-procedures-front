import { Component, OnInit } from '@angular/core';

import { StateService } from '../state/state.service';
import { State } from '../state/state';


@Component({
    selector: 'select-procedure',
    templateUrl: 'src/procedure/templates/procedure-select.component.html'
})

export class ProcedureSelectComponent implements OnInit {
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
