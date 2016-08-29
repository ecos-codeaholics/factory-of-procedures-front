import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

// Should import notifications component and needed services

@NgModule({
    imports:
    [
        // Fixme: Not yet implemented until HomeModule be
        // defined as the way to go.
        // @See Issue #19
        //CommonModule,
        //CitizenSelectProcedureComponent
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        //JwtHelperService
    ]
})

export class HomeModule { }
