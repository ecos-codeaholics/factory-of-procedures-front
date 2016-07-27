import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcedureAttachment } from './procedure-attachment';

@Component({
    selector: 'procedures-new',
    templateUrl: 'app/templates/procedures-new.component.html'
})

export class ProceduresNewComponent {

    title = 'Nuevo Trámite';

    file = new ProcedureAttachment('');
}
