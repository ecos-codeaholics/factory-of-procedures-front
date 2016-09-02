import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedureModule } from '../procedure/procedure.module';

import { HomeComponent } from './home.component';
import { ProcedureSelectComponent } from '../procedure/procedure-select.component';

// Should import notifications component and needed services

@NgModule({
    imports:
    [
        //ProcedureModule
    ],
    declarations: [
        HomeComponent,
        ProcedureSelectComponent,
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        //JwtHelperService
    ]
})

export class HomeModule { }
