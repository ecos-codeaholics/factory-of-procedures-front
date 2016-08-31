import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './citizen.routing';

import { CitizenHomeComponent } from './citizen-home.component';
import { CitizenListComponent } from './citizen-list.component';
import { CitizenFormComponent } from './citizen-form.component';
import { CitizenDetailComponent } from './citizen-detail.component';

import { StateService } from '../state/state.service';
import { CitizenService } from './citizen.service';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        CitizenHomeComponent,
        CitizenListComponent,
        CitizenFormComponent,
        //CitizenDetailComponent,
    ],
    providers: [
        CitizenService,
        StateService
    ],
})

export default class CitizenModule { }
