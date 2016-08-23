import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CitizenListComponent } from './citizen-list.component';
import { CitizenFormComponent } from './citizen-form.component';
import { CitizenDetailComponent } from './citizen-detail.component';


@Component({
    selector: 'citizens',
    templateUrl: 'app/citizen/templates/citizen-home.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class CitizenHomeComponent {

    title = 'Ciudadanos';
};
