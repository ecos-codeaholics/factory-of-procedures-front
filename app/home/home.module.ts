import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CitizenSelectProcedureComponent } from '../citizen/citizen-select-procedure.component';

// Should import notifications component and needed services

@NgModule({
    imports:
    [
        CommonModule,
        CitizenSelectProcedureComponent
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }
