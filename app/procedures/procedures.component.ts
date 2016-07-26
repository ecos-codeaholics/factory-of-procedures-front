import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'procedures-section',
    templateUrl: 'app/templates/procedures.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ProceduresComponent {

    title = 'Trámites';
}
