import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CitizenListComponent } from './citizen-list.component';
import { CitizenFormComponent } from './citizen-form.component';
import { CitizenDetailComponent } from './citizen-detail.component';
import { CitizenListProceduresComponent } from './citizen-list-procedures.component';
import { CitizenInProgressProceduresComponent } from './citizen-inprogress-procedures.component';


@Component({
    selector: 'citizens',
    templateUrl: 'app/citizen/templates/citizen-home.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [CitizenListComponent, CitizenFormComponent, CitizenDetailComponent,CitizenListProceduresComponent,CitizenInProgressProceduresComponent]
})

export class CitizenHomeComponent {

    title = 'Ciudadanos';
};
