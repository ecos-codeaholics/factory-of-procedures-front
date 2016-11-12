import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ProcedureSelectComponent } from '../procedure/procedure-select.component';
import { FactoryStatisticsComponent } from './factory-statistics.component';


// Should import notifications component and needed services

@NgModule({
    imports: [],
    declarations: [
        HomeComponent,
        FactoryStatisticsComponent
    ],
    exports: [
        HomeComponent,
        FactoryStatisticsComponent
    ],
    providers: []
})

export class HomeModule { }
