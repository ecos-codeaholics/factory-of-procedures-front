import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './procedure.routing';

import { ProcedureHomeComponent } from './procedure-home.component';
import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';

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
        //ProcedureOngoingFilterPipe,
    ],
    providers: [ProcedureService],
})

export default class ProcedureModule { }
