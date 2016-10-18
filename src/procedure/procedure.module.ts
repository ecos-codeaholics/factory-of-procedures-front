import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BuilderModule } from '../builder/builder.module';

import { routing } from './procedure.routing';

import { ProcedureHomeComponent } from './procedure-home.component';
import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';
import { ProcedureAssignedComponent } from './procedure-assigned.component';
import { ProcedureInfoComponent } from './procedure-info.component';
import { ProcedureDocsComponent } from './procedure-docs.component';
import { ProcedureFlowComponent } from './procedure-flow.component';
import { ProcedureBuilderComponent } from './procedure-builder.component';
import { DynamicFormComponent } from "../builder/dynamic-form.component";
import { DynamicFormFieldComponent } from "../builder/dynamic-form-field.component";

import { ProcedureOngoingFilterPipe } from './procedure-ongoing-filter.pipe';

import { ProcedureService } from './procedure.service';
import { FieldService } from "../builder/field.service";

@NgModule({
    imports: [
        SharedModule,
        BuilderModule,
        routing
    ],
    declarations: [
        ProcedureHomeComponent,
        ProcedureListComponent,
        ProcedureFormComponent,
        ProcedureOngoingFilterPipe,
        ProcedureInfoComponent,
        ProcedureAssignedComponent,
        ProcedureDocsComponent,
        ProcedureFlowComponent,
        ProcedureBuilderComponent,
    ],
    providers: [
        ProcedureService,
        FieldService
    ],
    bootstrap: [
        ProcedureListComponent,
        ProcedureFormComponent,
        DynamicFormComponent,
        DynamicFormFieldComponent
    ]
})

export default class ProcedureModule { }
