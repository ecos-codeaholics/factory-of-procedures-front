import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProceduresListComponent } from './procedures-list.component';
import { ProceduresNewComponent } from './procedures-new.component';

@Component({
    selector: 'procedures-section',
    templateUrl: 'app/templates/procedures.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [ProceduresListComponent, ProceduresNewComponent]
})

export class ProceduresComponent {

    title = 'Trámites';
}
