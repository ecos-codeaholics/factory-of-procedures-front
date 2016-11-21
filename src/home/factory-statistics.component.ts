import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './home.service';
import { Stats } from './model/stats';

@Component({
    selector: 'factory-statistics',
    templateUrl: 'src/home/templates/factory-statistics.component.html'
})

export class FactoryStatisticsComponent implements OnInit {

    title = 'Actualmente la Fábrica de Trámites cuenta con:';
    stats: Stats;
    citizens: any;
    mayoralties: any;
    procedures: any;


    private errorMessage: string;

    constructor(
        public homeService: HomeService
    ) { }

    getStats() {
        this.homeService.getStats().subscribe(
            (stats) => {
                this.citizens = stats.citizen;
                this.mayoralties = stats.mayoralties;
                this.procedures = stats.procedures;
            },
            (error) => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this.getStats();

    }
}
