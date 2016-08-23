import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';

@Component({
    selector: 'procedure-section',
    templateUrl: 'app/procedure/templates/procedure-home.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class ProcedureHomeComponent {

    title = 'Trámites';
}
