import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { FactoryStatisticsComponent } from './factory-statistics.component';
import { FactoryHelpSliderComponent } from './factory-help-slider.component';
import { FactoryTermsComponent } from './factory-terms.component';

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
        FactoryHelpSliderComponent,
        FactoryTermsComponent
    ],
    exports: [
        HomeComponent,
        FactoryStatisticsComponent,
        FactoryHelpSliderComponent
    ],
    providers: []
})

export class HomeModule { }
