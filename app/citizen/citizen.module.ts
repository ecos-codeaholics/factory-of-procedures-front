import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './citizen.routing';

import { CitizenHomeComponent } from './citizen-home.component';
import { CitizenListComponent } from './citizen-list.component';
import { CitizenFormComponent } from './citizen-form.component';
import { CitizenDetailComponent } from './citizen-detail.component';
import { CitizenSelectProcedureComponent } from './citizen-select-procedure.component';

import { StateService } from '../state/state.service';
import { CitizenService } from './citizen.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        CitizenHomeComponent,
        CitizenListComponent,
        CitizenFormComponent,
        //CitizenDetailComponent,
        CitizenSelectProcedureComponent
    ],
    providers: [
        CitizenService,
        StateService
    ],
    exports: [CitizenSelectProcedureComponent]
})

export default class CitizenModule { }
