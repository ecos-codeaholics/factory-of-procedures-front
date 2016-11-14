import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

    selector: 'app-home',
    templateUrl: 'src/home/templates/home.component.html',
})

export class HomeComponent {

    title = 'Inicio';

    constructor() { }
}
