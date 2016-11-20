import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { ProcedureSelectComponent } from '../procedure/procedure-select.component';
import { FactoryStatisticsComponent } from './factory-statistics.component';
import { FactoryHelpSliderComponent } from './factory-help-slider.component';
import { CarouselModule } from 'ng2-bootstrap/components/carousel';

// Should import notifications component and needed services

@NgModule({
    imports: [
        CarouselModule
    ],
    declarations: [
        HomeComponent,
        DashboardComponent,
        FactoryStatisticsComponent,
        FactoryHelpSliderComponent
    ],
    exports: [
        HomeComponent,
        FactoryStatisticsComponent,
        FactoryHelpSliderComponent
    ],
    providers: []
})

export class HomeModule { }
