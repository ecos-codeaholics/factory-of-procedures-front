import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CitizenSelectProcedureComponent } from './citizen/citizen-select-procedure.component';


@Component({
    selector: 'app-home',
    templateUrl: 'app/templates/home.component.html',
    directives: [ROUTER_DIRECTIVES, CitizenSelectProcedureComponent],
    precompile: [CitizenSelectProcedureComponent]
})

export class HomeComponent {
    title = 'Inicio';
}
