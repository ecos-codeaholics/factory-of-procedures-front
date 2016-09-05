import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ProcedureSelectComponent } from '../procedure/procedure-select.component';

// Should import notifications component and needed services

@NgModule({
    imports: [],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent
    ],
    providers: []
})

export class HomeModule { }
