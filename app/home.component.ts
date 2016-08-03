import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: 'app/templates/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
    title = 'Inicio';
}
