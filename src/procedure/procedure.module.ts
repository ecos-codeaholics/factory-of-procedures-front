import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './procedure.routing';

import { ProcedureHomeComponent } from './procedure-home.component';
import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';
import { ProcedureAssignedComponent } from './procedure-assigned.component';

import { ProcedureOngoingFilterPipe } from './procedure-ongoing-filter.pipe';

import { ProcedureService } from './procedure.service';
import {ProcedureInfoComponent} from "./procedure-info.component";

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
        ProcedureInfoComponent,
        ProcedureAssignedComponent
    ],
    providers: [ProcedureService],
    bootstrap: [
        ProcedureListComponent,
        ProcedureFormComponent
    ]
})

export default class ProcedureModule { }
