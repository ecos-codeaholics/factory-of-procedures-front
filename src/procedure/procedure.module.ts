import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './procedure.routing';

import { ProcedureHomeComponent } from './procedure-home.component';
import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';
import { ProcedureAssignedComponent } from './procedure-assigned.component';

import { ProcedureOngoingFilterPipe } from './procedure-ongoing-filter.pipe';

import { ProcedureService } from './procedure.service';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        ProcedureHomeComponent,
        ProcedureListComponent,
        ProcedureFormComponent,
        ProcedureOngoingFilterPipe,
        ProcedureAssignedComponent
    ],
    providers: [ProcedureService],
    bootstrap: [
        ProcedureListComponent,
        ProcedureFormComponent
    ]
})

export default class ProcedureModule { }
